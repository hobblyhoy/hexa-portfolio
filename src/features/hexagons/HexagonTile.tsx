/** @jsxImportSource @emotion/react */
import { useEffect, useMemo, useState } from 'react';
import { css, keyframes } from '@emotion/react';
import hexagonImage from '../../assets_test/sketchup_hexa.png';
import hexagonProjects from '../../assets_test/sketchup_hexa_projects2.png';
import { HEXAGON_FADE_TIME, TILE_WIDTH } from '../../app/constants';
import { IHexagon } from './HexagonTypes';

const getRandom = (min: number, max: number): number => Math.random() * (max - min) + min;

function HexagonTile({ style, isoCoords, cartCoords, id, isVisible }: IHexagon) {
   const randomStartDelay = useMemo(() => getRandom(10, 25), []);
   const randomOscillationPhase = useMemo(() => getRandom(5, 6), []);

   // Deactivation once opacity reaches 0 so that click events and whatnot are not
   // erroneously caught here and browser doesnt need to continue processing the animation
   const [isDeactivated, setIsDeactivated] = useState(false);
   useEffect(() => {
      if (isVisible === false) {
         setTimeout(() => setIsDeactivated(true), HEXAGON_FADE_TIME);
      }
   }, [isVisible]);

   const slideUpDown = keyframes`
      0% { top: ${cartCoords.cartY}px; }
      10% { top: ${cartCoords.cartY}px; }
      40% { top: ${cartCoords.cartY + 10}px; }
      60% { top: ${cartCoords.cartY + 10}px; }
      90% { top: ${cartCoords.cartY}px; }
      100% { top: ${cartCoords.cartY}px; }
   `;

   const getTopValue = (isVisible: boolean | null, cartY: number): number => {
      if (isVisible === null) {
         return cartY - 30; // Entrance state
      } else if (isVisible === true) {
         return cartY; // Regular state
      } else {
         return cartY + 30; // Exit state
      }
   };

   const baseCss = css`
      position: fixed;
      left: ${cartCoords.cartX}px;
      top: ${getTopValue(isVisible, cartCoords.cartY)}px;
      height: auto;
      width: ${TILE_WIDTH}px;
      animation: ${slideUpDown};
      animation-duration: ${randomOscillationPhase}s;
      animation-delay: ${randomStartDelay}s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      cursor: ${false ? 'pointer' : 'unset'};
      opacity: ${isVisible ? 1 : 0};
      transition: opacity ${HEXAGON_FADE_TIME / 1000}s ease-in-out, top ${HEXAGON_FADE_TIME / 1000}s ease-in-out;
      display: ${isDeactivated ? 'none' : 'block'};
   `;

   const imgCss = css`
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
      &:hover {
         opacity: 1;
      }
   `;

   return (
      <div css={baseCss} data-iso-id={id}>
         <img
            src={false ? hexagonProjects : hexagonImage}
            css={imgCss}
            onClick={() => {
               console.log('clicky!');
            }}
         />
      </div>
   );
}

export default HexagonTile;
