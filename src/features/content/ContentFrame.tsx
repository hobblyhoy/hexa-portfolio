/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useAppSelector } from '../../app/hooks';
import Welcome from './Welcome';
import About from './About';
import useBreakpoint from '../customHooks/useBreakpoint';

function ContentFrame() {
   const { isDesktop } = useBreakpoint();
   const baseCss = css`
      display: flex;
      margin-left: ${isDesktop ? '50%' : 'unset'};
      padding: ${isDesktop ? '40px' : '20px'};
   `;

   const screenIsFilledWithHexagons = useAppSelector(store => store.hexagon.hasFilledScreen);

   return (
      <div css={baseCss} className={`text-primary ${screenIsFilledWithHexagons ? 'opacity-100' : 'opacity-0'}`}>
         <div className='flex flex-col justify-center w-full'>
            <Welcome />
            <About />
         </div>
      </div>
   );
}

export default ContentFrame;
