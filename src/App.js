import React from 'react';
import {Routes, Route } from "react-router-dom";
import Homescreen from './components/Home';
import Schedule from './components/Schedule';
import Navbar from './components/Navbar';
import GameDetailTable from './components/GameDetail';


function App() {
  return (
    <><Navbar />
    <div>
        <Routes>
          <Route path="/" exact element={<Homescreen />}>
          </Route>
          <Route path="/Schedule" element={<Schedule/>}>
          </Route>
          <Route path="/game/:id" element={<GameDetailTable/>}>
          </Route>
        </Routes>
    </div></>
  );
}

export default App;
