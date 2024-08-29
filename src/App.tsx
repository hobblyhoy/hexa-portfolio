import React from 'react';
import './App.css';
import HexagonRenderer from './features/hexagons/HexagonRenderer';
import PrimaryContent from './features/content/PrimaryContent';

function App() {
   return (
      <div className="App">
         <HexagonRenderer />
         <PrimaryContent />
      </div>
   );
}

export default App;
