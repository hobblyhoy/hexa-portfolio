/** @jsxImportSource @emotion/react */
import { useEffect, useMemo, useState } from 'react';
import { css, keyframes } from '@emotion/react';
import hexagonImage from '../../assets_test/sketchup_hexa.png';
import hexagonProjects from '../../assets_test/sketchup_hexa_projects2.png';
import { HEXAGON_FADE_OUT_TIME, TILE_WIDTH } from '../../app/constants';
import { IHexagon } from './HexagonTypes';

const getRandom = (min: number, max: number): number => Math.random() * (max - min) + min;

function HexagonTile({ style, isoCoords, cartCoords, id, opacity }: IHexagon) {
   const slideUpDown = keyframes`
      0% { top: ${cartCoords.cartY}px; }
      10% { top: ${cartCoords.cartY}px; }
      40% { top: ${cartCoords.cartY + 10}px; }
      60% { top: ${cartCoords.cartY + 10}px; }
      90% { top: ${cartCoords.cartY}px; }
      100% { top: ${cartCoords.cartY}px; }
   `;
   const randomStartDelay = useMemo(() => getRandom(0, 10), []);
   const randomOscillationPhase = useMemo(() => getRandom(5, 6), []);
   
   // Deactivation once opacity reaches 0 so that click events and whatnot are not
   // erroneously caught here and browser doesnt need to continue processing the animation
   const [isDeactivated, setIsDeactivated] = useState(false);
   useEffect(() => {
      if (opacity == 0 && !isDeactivated) {
         setTimeout(() => {
            setIsDeactivated(true);
         }, HEXAGON_FADE_OUT_TIME);
      }

   }, [opacity]);

   return (
      <div
         css={css`
            position: fixed;
            left: ${cartCoords.cartX}px;
            top: ${cartCoords.cartY}px;
            height: auto;
            width: ${TILE_WIDTH}px;
            animation: ${slideUpDown};
            animation-duration: ${randomOscillationPhase}s;
            animation-delay: ${randomStartDelay}s;
            animation-timing-function: ease-in-out;
            //animation-timing-function: linear;
            animation-iteration-count: infinite;
            cursor: ${false ? 'pointer' : 'unset'};
            opacity: ${opacity};
            transition: opacity ${HEXAGON_FADE_OUT_TIME / 1000}s ease-in-out;
            display: ${isDeactivated ? 'none' : 'block'}
         `}
         data-iso-id={id}
      >
         <img
            src={false ? hexagonProjects : hexagonImage}
            css={css`
               opacity: 0.95;
               transition: opacity 0.3s ease-in-out;
               &:hover {
                  opacity: 1;
               }
            `}
            onClick={() => {
               console.log('clicky!');
            }}
         />
      </div>
   );
}

export default HexagonTile;
