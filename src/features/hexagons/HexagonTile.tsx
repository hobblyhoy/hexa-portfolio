/** @jsxImportSource @emotion/react */
import { useMemo } from 'react';
import { css, keyframes } from '@emotion/react';
import hexagonImage from '../../assets_test/sketchup_hexa.png';
import hexagonProjects from '../../assets_test/sketchup_hexa_projects2.png';
import { TILE_WIDTH } from '../../app/constants';
import { IHexagon } from './HexagonTypes';

interface HexagonPngProps {
   left: number;
   top: number;
   isLinkTest?: boolean;
}

const getRandom = (min: number, max: number): number => Math.random() * (max - min) + min;

function HexagonPng({ style, isoCoords, cartCoords, id }: IHexagon) {
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
   //const randomOscillationPhase = 5;

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

export default HexagonPng;
