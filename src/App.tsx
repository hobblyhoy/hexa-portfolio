import React from 'react';
import HexagonRenderer from './features/hexagons/HexagonRenderer';
import ContentFrame from './features/content/ContentFrame';

function App() {
   return (
      <div className="overflow-x-hidden">
         <HexagonRenderer />
         <ContentFrame />
      </div>
   );
}

export default App;
