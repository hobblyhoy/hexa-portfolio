/** @jsxImportSource @emotion/react */
import { useMemo } from 'react';
import { css, keyframes } from '@emotion/react';

interface HexagonProps {
   left: number;
   top: number;
}
const getRandom = (min: number, max: number): number => Math.random() * (max - min) + min;

function Hexagon({ left, top }: HexagonProps) {
   const slideUpDown = keyframes`
   0% { top: ${top}px; }
   50% { top: ${top + 20}px; }
   100% { top: ${top}px; }
`;
   const randomStartDelay = useMemo(() => getRandom(0, 2), []);
   const randomOscillationPhase = useMemo(() => getRandom(2,3), []);

   return (
      <div
         css={css`
            width: 100px;
            position: fixed;
            left: ${left}px;
            top: ${top}px;
            animation: ${slideUpDown};
            animation-duration: ${randomOscillationPhase}s;
            animation-delay: ${randomStartDelay}s;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
            opacity: 0.85;
         `}
      >
         <svg
            version="1.1"
            id="svg2"
            width="200"
            height="182.34802"
            viewBox="0 0 200 182.34802"
            css={css`
               width: 100%;
               height: auto;
            `}
         >
            <defs id="defs6" />
            <g id="layer1" transform="translate(-128.96719,-158.56976)">
               <path
                  className="hexa-left"
                  d="m 128.96719,201.03438 26.47793,57.78518 v 66.61116 l -26.47793,-57.78519 z"
                  id="path3094"
               />
               <path
                  className="hexa-mid"
                  d="m 155.44512,258.81956 100.2498,15.48709 v 66.61115 l -100.2498,-15.48708 z"
                  id="path3150"
               />
               <path
                  className="hexa-right"
                  d="m 255.69492,274.30665 73.27227,-42.29809 v 66.61116 l -73.27227,42.29808 z"
                  id="path3314"
               />
               <path
                  className="hexa-top-light"
                  d="m 128.96719,201.03438 73.27227,-42.46461 99.91674,15.48709 26.81099,57.9517 -73.27227,42.29809 -100.2498,-15.48709 z"
                  id="path847"
               />
            </g>
         </svg>
      </div>
   );
}

export default Hexagon;

         {/* <Hexagon left={390} top={286} />
         <Hexagon left={302} top={300} />
         <Hexagon left={366} top={338} />
         <Hexagon left={278} top={352} /> */}