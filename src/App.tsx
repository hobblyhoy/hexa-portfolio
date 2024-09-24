import React from 'react';
import HexagonRenderer from './features/hexagons/HexagonRenderer';
import ContentFrame from './features/structure/ContentFrame';

function App() {
   return (
      <div className="overflow-x-hidden">
         <HexagonRenderer />
         <ContentFrame />
      </div>
   );
}

export default App;
