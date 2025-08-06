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
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestCamera />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
