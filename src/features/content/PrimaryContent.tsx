/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useAppSelector } from '../../app/hooks';
import Welcome from './Welcome';
import About from './About';

const baseCss = css`
   display: flex;
   margin-left: 50%;
`;

function PrimaryContent() {
   const screenIsFilledWithHexagons = useAppSelector(store => store.hexagon.hasFilledScreen);
   return (
      <div css={baseCss} className={`text-primary ${screenIsFilledWithHexagons ? 'opacity-100' : 'opacity-0'}`}>
         <div className="flex flex-col justify-center w-full">
            <Welcome />
            <About />
         </div>
      </div>
   );
}

export default PrimaryContent;
