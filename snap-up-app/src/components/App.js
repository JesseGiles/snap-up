
import React, { useState, useRef } from 'react';
import '../component-styles/App.css';
import Lane from './Lane';
import PlayerZone from './PlayerZone'


function App() {
  

  return (
    <div className="App">
      <div className="opp-pz">
      <PlayerZone
      player="p2-opp"
      />
      </div>
      <div className="battlefield">
        <Lane 
        position="left"
        />
        <Lane 
        position="mid"
        />
        <Lane 
        position="right"
        />
      </div>
      <PlayerZone 
      player="p1-self"/>
    </div>
  );
}

export default App;
