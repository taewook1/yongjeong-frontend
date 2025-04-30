import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import IntroPage from './pages/intro/IntroPage';
import GreetingPage from './pages/intro/GreetingPage';
import HistoryPage from './pages/intro/HistoryPage';
import RulesPage from './pages/intro/RulesPage';
import PastPresidentsPage from './pages/intro/PastPresidentsPage';
import OrganizationPage from './pages/intro/OrganizationPage';
import LocationPage from './pages/intro/LocationPage';

import RecordPage from './pages/record/RecordPage';
import AnnualMeetingPage from './pages/record/AnnualMeetingPage';
import NewsletterPage from './pages/record/NewsletterPage';
import SportsDayPage from './pages/record/SportsDayPage';
import MemorialHallPage from './pages/record/MemorialHallPage';
import ResourcesPage from './pages/record/ResourcesPage';

import AlumniPage from './pages/alumni/AlumniPage';
import AlumniEventsPage from './pages/alumni/AlumniEventsPage';
import AlumniStatusPage from './pages/alumni/AlumniStatusPage';
import AlumniGroupPage from './pages/alumni/AlumniGroupPage';
import AlumniEtcPage from './pages/alumni/AlumniEtcPage';

import CommunityPage from './pages/community/CommunityPage';
import NoticePage from './pages/community/NoticePage';
import PlansPage from './pages/community/PlansPage';
import FreeboardPage from './pages/community/FreeboardPage';
import FreeboardWrite from './pages/community/FreeboardWrite';
import FreeboardDetail from './pages/community/FreeboardDetail';
import FreeboardEdit from './pages/community/FreeboardEdit';

import MembershipPage from './pages/membership/MembershipPage';
import MembershipGuidePage from './pages/membership/MembershipGuidePage';
import MembershipUsagePage from './pages/membership/MembershipUsagePage';
import MembershipStatusPage from './pages/membership/MembershipStatusPage';
import MembershipFundPage from './pages/membership/MembershipFundPage';
import MembershipServicePage from './pages/membership/MembershipServicePage';

import ScholarshipPage from './pages/foundation/ScholarshipPage';
import ScholarshipIntroPage from './pages/foundation/ScholarshipIntroPage';
import ScholarshipProgramPage from './pages/foundation/ScholarshipProgramPage';

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
          <Route path="history" element={<HistoryPage />} />
          <Route path="rules" element={<RulesPage />} />
          <Route path="past-presidents" element={<PastPresidentsPage />} />
          <Route path="organization" element={<OrganizationPage />} />
          <Route path="location" element={<LocationPage />} />
        </Route>

        <Route path="/archive" element={<RecordPage />}>
          <Route path="annual-meeting" element={<AnnualMeetingPage />} />
          <Route path="newsletter" element={<NewsletterPage />} />
          <Route path="sports-day" element={<SportsDayPage />} />
          <Route path="memorial-hall" element={<MemorialHallPage />} />
          <Route path="resources" element={<ResourcesPage />} />
        </Route>

        <Route path="/alumni" element={<AlumniPage />}>
          <Route path="alumni-events" element={<AlumniEventsPage />} />
          <Route path="alumni-status" element={<AlumniStatusPage />} />
          <Route path="alumni-group" element={<AlumniGroupPage />} />
          <Route path="alumni-etc" element={<AlumniEtcPage />} />
        </Route>

        <Route path="/community" element={<CommunityPage />}>
          <Route path="notice" element={<NoticePage />} />
          <Route path="plans" element={<PlansPage />} />
          <Route path="freeboard" element={<FreeboardPage />} />
          <Route path="freeboard/write" element={<FreeboardWrite />} />
          <Route path="freeboard/:id" element={<FreeboardDetail />} />
          <Route path="freeboard/edit/:id" element={<FreeboardEdit />} />

        </Route>

        <Route path="/membership" element={<MembershipPage />}>
          <Route path="guide" element={<MembershipGuidePage />} />
          <Route path="fee-usage" element={<MembershipUsagePage />} />
          <Route path="fee-status" element={<MembershipStatusPage />} />
          <Route path="fund" element={<MembershipFundPage />} />
          <Route path="service" element={<MembershipServicePage />} />
        </Route>

        <Route path="/foundation" element={<ScholarshipPage />}>
          <Route path="intro" element={<ScholarshipIntroPage />} />
          <Route path="scholarship" element={<ScholarshipProgramPage />} />
        </Route>

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
