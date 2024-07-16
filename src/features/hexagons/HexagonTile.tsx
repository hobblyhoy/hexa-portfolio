/** @jsxImportSource @emotion/react */
import { useMemo } from 'react';
import { css, keyframes } from '@emotion/react';
import hexagonImage from '../../assets_test/sketchup_hexa.png';
import hexagonProjects from '../../assets_test/sketchup_hexa_projects2.png'

interface HexagonPngProps {
   left: number;
   top: number;
   isLinkTest?: boolean;
}

const getRandom = (min: number, max: number): number => Math.random() * (max - min) + min;

function HexagonPng({ left, top, isLinkTest = false }: HexagonPngProps) {
   const slideUpDown = keyframes`
      0% { top: ${top}px; }
      50% { top: ${top + 20}px; }
      100% { top: ${top}px; }
   `;
   const randomStartDelay = useMemo(() => getRandom(0, 1), []);
   const randomOscillationPhase = useMemo(() => getRandom(1,10), []);

   return (
      <div
         css={css`
            position: fixed;
            left: ${left}px;
            top: ${top}px;
            // animation: ${slideUpDown};
            // animation-duration: ${randomOscillationPhase}s;
            // animation-delay: ${randomStartDelay}s;
            // animation-timing-function: ease-in-out;
            // animation-iteration-count: infinite;
            cursor: ${isLinkTest ? 'pointer' : 'unset'};
         `}
      >
         <img
            src={isLinkTest ? hexagonProjects : hexagonImage}
            css={css`
               height: auto;
               width: 100px;
               opacity: 0.75;
               transition: opacity 0.66s ease-in-out;
               &:hover {
                  opacity: 1;
               }
            `}
            onClick={() => {
               console.log('clicky!');
            }}
         />
         {/* {isLinkTest && (
            <div
               css={css`
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: skewX(10deg) translate(-50%, -50%);
                  color: #be9fec;
                  font-size: 16px;
                  font-weight: bold;
                  pointer-events: none;
               `}
            >
               Projects
            </div>
         )} */}
      </div>
   );
}

export default HexagonPng;
