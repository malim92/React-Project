import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import  from 'react-router';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';

//react-router
import Users from './users/pages/users';
import Pages from './places/pages/pages';
import Hello from './test/hello';
import NewPlace from './places/pages/NewPlace';

function App() {
  return  (
  <Router>
    <MainNavigation />
    <main>
    <Routes>
      <Route path="users" element={<Users />} />
      <Route path="/:userId/places" element={<UserPlaces />} />
      <Route path="pages" element={<Pages />} />
      <Route path="test" element={<Hello />} />
      <Route path="/places/new" element={<NewPlace />} />
      </Routes>
      </main> 
  </Router>);
};

export default App;
 