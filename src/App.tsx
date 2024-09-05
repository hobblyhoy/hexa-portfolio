/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import HexagonRenderer from './features/hexagons/HexagonRenderer';
import ContentFrame from './features/content/ContentFrame';

const baseCss = css`
   text-align: center;
   overflow-x: hidden;
`

function App() {
   return (
      <div className="App" css={baseCss}>
         <HexagonRenderer />
         <ContentFrame />
      </div>
   );
}

export default App;
