import React, {useCallback, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
//import  from 'react-router';
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import { AuthContext } from "./shared/context/auth-context";

//react-router
import Users from "./users/pages/users";
import Pages from "./places/pages/pages";
import Hello from "./test/hello";
import NewPlace from "./places/pages/NewPlace";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./users/pages/Auth";

function App() {

  const [isLoggedIn, setIsLoggedIn]= useState(false);

  const login = useCallback( () => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback( () => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn){
    routes = (
      <React.Fragment>
      <Route path="users" element={<Users />} />
      <Route path="/:userId/places" element={<UserPlaces />} />
      <Route path="" element={<Navigate to="/" />} />
      </React.Fragment>
    );
  }
  else {
    routes = (
      <Routes>
      <Route path="users" element={<Users />} />
      <Route path="/:userId/places" element={<UserPlaces />} />
      <Route path="auth" element={<Auth />} />
      <Route path="" element={<Navigate to="auth" />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout }}>
      <Router>
        <MainNavigation />
        <main>
          
            {/* <Route path="users" element={<Users />} />
            <Route path="/:userId/places" element={<UserPlaces />} />
            <Route path="pages" element={<Pages />} />
            <Route path="test" element={<Hello />} />
            <Route path="/places/new" element={<NewPlace />} />
            <Route path="/places/:id" element={<UpdatePlace />} />
            <Route path="auth" element={<Auth />} /> */}
            {routes}
          
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
