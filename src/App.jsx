import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NoticePage from './pages/NoticePage';
import AlumniNewsPage from './pages/AlumniNewsPage';
import LoginPage from './pages/LoginPage';
import SignupChoice from './pages/SignupChoice';
import SignupTerms from './pages/SignupTerms';
import SignupForm from './pages/SignupForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notices" element={<NoticePage />} />
        <Route path="/alumni-news" element={<AlumniNewsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupChoice />} />
        <Route path="/signup/terms" element={<SignupTerms />} />
        <Route path="/signup/form" element={<SignupForm />} />
      </Routes>
    </Router>
  );
}

export default App;