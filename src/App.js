import React from 'react';
import {Routes, Route } from "react-router-dom";
import Homescreen from './components/Pages/Home';
import Schedule from './components/Pages/Schedule';
import Navbar from './components/Pages/Navbar';
import GameDetailTable from './components/Pages/GameDetail';
import SignIn from './components/Functionalities/SignIn';
import Account from './components/Pages/Account';
import Protected from './components/Pages/Protected';
import { AuthContextProvider } from './Context/Authcontext'




function App() {
  return (
    <div>
    <AuthContextProvider>
      <Navbar />
        <Routes>
          <Route path="/" exact element={<Homescreen />}>
          </Route>
          <Route path="/Schedule" element={<Schedule/>}>
          </Route>
          <Route path="/game/:id" element={<GameDetailTable/>}>
          </Route>
          <Route path="/SignIn" element={<SignIn/>}>
          </Route>
          <Route path="/Account" element={<Protected><Account/></Protected>}>
          </Route>
        </Routes>
    </AuthContextProvider>
    </div>
  );
}

export default App;
