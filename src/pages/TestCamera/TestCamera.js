import './TestCamera.css';
import React, { useEffect, useRef, useState } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as knnClassifier from '@tensorflow-models/knn-classifier';
import { initNotifications, notify } from '@mycv/f8-notification';
import { Howl } from 'howler';
import soundUrl from '../../assets/zip-sound.mp3';
import * as tf from '@tensorflow/tfjs';

var sound = new Howl({
  src: [soundUrl]
});

const notTouch_label = 'notTouch';
const touched_label = 'touched';
const TRAIN_SAMPLES = 100;
const TOUCHED_CONFIDENCE = 0.8;

function TestCamera() {
  const video = useRef();
  const model = useRef();
  const classifier = useRef();
  const [touched, setTouched] = useState(false);
  const [trainingState, setTrainingState] = useState('ready');
  const [trainingProgress, setTrainingProgress] = useState(0);
  const isCancelled = useRef(false);
  const canPlaySound = useRef(true);

  useEffect(() => {
    const init = async () => {
      console.log('Initializing app...');
      
      await tf.setBackend('webgl');
      await tf.ready(); 

      await setupCamera();
      model.current = await mobilenet.load();
      classifier.current = knnClassifier.create();
      initNotifications({ cooldown: 3000 });
      console.log('App initialized successfully');
    };
    init();

    sound.on('end', () => {
      canPlaySound.current = true;
    });

    return () => {
      sound.off('end');
    };
  }, []);

  useEffect(() => {
    if (trainingState === 'running') {
      const runPrediction = async () => {
        if (!classifier.current || classifier.current.getNumClasses() === 0) {
          console.log('Classifier not trained yet.');
          setTrainingState('ready');
          return;
        }

        const embedding = model.current.infer(video.current, true);
        const result = await classifier.current.predictClass(embedding);

        if (result.label === touched_label && result.confidences[result.label] > TOUCHED_CONFIDENCE) {
          if (canPlaySound.current) {
            canPlaySound.current = false;
            sound.play();
          }
          setTouched(true);
          notify('Bỏ ra bạn êy', { body: 'Cái tay hư kìaaaa' });
        } else {
          setTouched(false);
        }
        
        await new Promise(resolve => setTimeout(resolve, 200));
        
        if (trainingState === 'running') {
          runPrediction();
        }
      };
      runPrediction();
    }
  }, [trainingState]);

  const setupCamera = () => {
    return new Promise((resolve, reject) => {
      navigator.getUserMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;
      if (navigator.getUserMedia) {
        navigator.getUserMedia(
          { video: true },
          stream => {
            video.current.srcObject = stream;
            video.current.addEventListener('loadeddata', resolve);
          },
          error => reject(error)
        );
      } else {
        reject(new Error('getUserMedia not supported in this browser'));
      }
    });
  };

  const trainLoop = async (label, onProgress) => {
    for (let i = 0; i < TRAIN_SAMPLES; ++i) {
      if (isCancelled.current) {
        return;
      }
      const embedding = model.current.infer(video.current, true);
      classifier.current.addExample(embedding, label);
      onProgress(Math.floor(((i + 1) / TRAIN_SAMPLES) * 100));
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  };

  const startTrainingProcess = async () => {
    isCancelled.current = false;
    setTrainingState('training1');
    await trainLoop(notTouch_label, setTrainingProgress);
    if (!isCancelled.current) {
      setTrainingState('paused');
      setTrainingProgress(0);
    }
  };

  const continueTraining = async () => {
    isCancelled.current = false;
    setTrainingState('training2');
    await trainLoop(touched_label, setTrainingProgress);
    if (!isCancelled.current) {
      setTrainingState('readyToRun');
    }
  };
  
  const renderButton = () => {
    switch (trainingState) {
      case 'ready':
        return (
          <>
            <p>Bước 1: Quay video không chạm tay lên mặt! </p>
            <button className="btn btn-primary" onClick={startTrainingProcess}>Bắt đầu</button>
          </>
        );
      case 'training1':
        return (
          <>
            <p>Không chạm tay lên mặt cho tới khi hoàn thành. AI đang học ({trainingProgress}%)</p>
          </>
        );
      case 'paused':
        return (
          <>
            <p>Bước 2: Quay video đưa tay gần lên mặt cách mặt (10 cm) và bấm "Tiếp tục"</p>
            <button className="btn btn-primary" onClick={continueTraining}>Tiếp tục</button>
          </>
        );
      case 'training2':
        return (
          <>
            <p>Giuwwx tay trong tầm nhìn camera cho tới khi hoàn thành. AI đang học ({trainingProgress}%)</p>
          </>
        );
      case 'readyToRun':
        return (
          <>
            <p>Training đã hoàn tất!</p>
            <p>Bấm nút để bắt đầu sử dụng ứng dụng.</p>
            <button className="btn btn-primary" onClick={() => setTrainingState('running')}>Bắt đầu sử dụng</button>
          </>
        );
      case 'running':
        return (
          <>
            <p>Ứng dụng đang chạy! AI đang theo dõi cái tay của bạn.</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`main ${touched ? 'touched' : ''}`}>
      <h1>Face Touching</h1>
      <video
        ref={video}
        className="video"
        autoPlay
        playsInline
      />
      <div className="overlay">
        {renderButton()}
      </div>
    </div>
  );
}

export default TestCamera;