import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NoticePage from './pages/NoticePage';
import AlumniNewsPage from './pages/AlumniNewsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notices" element={<NoticePage />} />
        <Route path="/alumni-news" element={<AlumniNewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;