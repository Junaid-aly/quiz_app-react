import { BrowserRouter, Routes, Route } from 'react-router-dom';
import svg from"../src/assets/bg5.jpg";

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import React_quiz from './components/React-Quiz/React_quiz';
import Quizjs from './components/Js_Quiz/QuizJs';
import QuizH from './components/Html_Quiz/QuizH';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex   w-full lg:h-screen justify-center items-center   gap-10"style={{
        backgroundImage: `url(${svg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }} >
      
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/react-quiz" element={<React_quiz/>} />
          <Route path="/js-quiz" element={<Quizjs/>} />
          <Route path="/html-quiz" element={<QuizH/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
