// import './App.css';
// import React, { useEffect, useRef, useState} from 'react';
// import * as mobilenet from '@tensorflow-models/mobilenet';
// import * as knnClassifier from '@tensorflow-models/knn-classifier';
// import { initNotifications, notify } from '@mycv/f8-notification';
// import {Howl} from 'howler';
// import * as tf from '@tensorflow/tfjs';
// import soundUrl from './assets/sound.mp3';


// var sound = new Howl({
//   src: [soundUrl]
// });

// // sound.play();
// const notTouch_label =  'notTouch';
// const touched_label = 'touched';
// const trainTime = 100; // milliseconds
// const TOUCHED_CONFIDENCE = 0.8; // confidence threshold for touch detection

// function App() {
//   const video = useRef();
//   const model = useRef();
//   const canPlaySound = useRef(true);
//   const classifier = useRef();
//   const [touched, setTouched] = useState(false);

//   const init = async () => {
//     console.log('Initializing app...');
//     await setupCamera();
//     model.current = await mobilenet.load();
//     classifier.current = knnClassifier.create();

//     console.log('App initialized successfully');
//     console.log('Dont touch your face!');
//     initNotifications({ cooldown: 3000 });
//   };

//   const setupCamera = () => {
//     return new Promise((resolve, reject) => {
//       navigator.getUserMedia = navigator.getUserMedia ||
//         navigator.webkitGetUserMedia ||
//         navigator.mozGetUserMedia ||
//         navigator.msGetUserMedia;
//       if (navigator.getUserMedia) {
//         navigator.getUserMedia(
//           { video: true },
//           stream => {
//             video.current.srcObject = stream;
//             video.current.addEventListener('loadeddata', resolve)
            
//           },
//           error => {
//             reject(error);
//           }
//         );
//       } else {
//         reject(new Error('getUserMedia not supported in this browser'));
//       }
//     });
//   }

//   const train = async label => {
//     for (let i = 0; i < trainTime; ++i) {
//       console.log(`Processing frame ${i + 1} of ${trainTime} for label: ${label}`);
//       await training(label);
//     }

//   }

//   const training = label => {
//     return new Promise(async (resolve, reject) => {
//       const embedding = model.current.infer(
//         video.current, 
//         true
//       );
//       classifier.current.addExample(embedding, label);
//       await sleep(100);
//       resolve();
//     });
//   }

//   const run = async () => {
//     const embedding = model.current.infer(
//         video.current, 
//         true
//     )
//     const result = await classifier.current.predictClass(embedding); // classifier
//     console.log('Label:', result.label);
//     console.log('Confidence:', result.confidences);
//     if (
//       result.label === touched_label &&
//       result.confidences[result.label] > TOUCHED_CONFIDENCE
//     ) {
//       console.log('Face touching detected!');
//       if (canPlaySound.current) {
//         canPlaySound.current = false;
//         sound.play(); // Uncomment to play sound when face touching is detected
//       }
//       notify('Bỏ ra bạn êy', { body: 'Cái tay hư kìaaaa' });

//       setTouched(true);
//     }else {
//       console.log('No face touching detected');
//       setTouched(false);
//     }
//     await sleep(200); // wait for a second before next prediction
//     run(); // call run again to continue the loop
//   }


//   const sleep = (ms = 0) => {
//     return new Promise(resolve => {
//       setTimeout(resolve, ms);
//     });
//   }
//   useEffect(() => {
//     init();
//   sound.on('end', function(){
//     canPlaySound.current = true;
//   });

//     return () => {
//       sound.off('end');
//     };
//   }, []);
//   return (
//     <div className={`main ${touched ? 'touched' : ''}`}>
//       <h1>Face Touching</h1>
//       <video
//       ref={video}
//       className="video"
//       autoPlay
//       />
//       <div className="overlay">
//         <button className="btn" onClick={() => train(notTouch_label)}>Train 1</button>
//         <button className="btn" onClick={() => train(touched_label)}>Train 2</button>
//         <button className="btn" onClick={() => run()}>Run</button>
//         </div>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage/HomePage';
import TestCamera from './pages/TestCamera/TestCamera';

function App() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/test" element={<TestCamera />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
