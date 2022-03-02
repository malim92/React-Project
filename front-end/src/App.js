import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import  from 'react-router';
import MainNavigation from './shared/components/Navigation/MainNavigation';

//react-router
import Users from './users/pages/users';
import Pages from './places/pages/pages';

function App() {
  return  (
  <Router>
    <MainNavigation />
    <main>
    <Routes>
      <Route path="users" element={<Users />} />
      <Route path="pages" element={<Pages />} />
      </Routes>
      </main> 
  </Router>);
};

export default App;
 