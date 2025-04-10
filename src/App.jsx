import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import IntroPage from './pages/intro/IntroPage';
import GreetingPage from './pages/intro/GreetingPage';
import CommunityPage from './pages/community/CommunityPage';
import NoticePage from './pages/community/NoticePage';
import AlumniNewsPage from './pages/AlumniNewsPage';
import LoginPage from './pages/LoginPage';
import SignupChoice from './pages/SignupChoice';
import SignupTerms from './pages/SignupTerms';
import SignupForm from './pages/SignupForm';
import SignupComplete from './pages/SignupComplete';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intro" element={<IntroPage />}>
          <Route path="greeting" element={<GreetingPage />} />
        </Route>
        <Route path="community" element={<CommunityPage />}>
          <Route path="notice" element={<NoticePage />} />
        </Route>
        <Route path="/alumni-news" element={<AlumniNewsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupChoice />} />
        <Route path="/signup/terms" element={<SignupTerms />} />
        <Route path="/signup/form" element={<SignupForm />} />
        <Route path="/signup-complete" element={<SignupComplete />} />
      </Routes>
    </Router>
  );
}

export default App;