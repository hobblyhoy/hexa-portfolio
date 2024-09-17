/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useAppSelector } from '../../app/hooks';
import Welcome from './Welcome';
import About from './About';
import useBreakpoint from '../customHooks/useBreakpoint';
import Projects from './Projects';
import Work from './Work';

function ContentFrame() {
   const { isDesktop } = useBreakpoint();
   const baseCss = css`
      display: flex;
      margin-left: ${isDesktop ? '50%' : 'unset'};
      padding: ${isDesktop ? '40px' : '30px'};
      justify-content: center;
   `;

   const max600Css = css`
      max-width: ${isDesktop ? '600px' : 'unset'};
   `;

   const screenIsFilledWithHexagons = useAppSelector(store => store.hexagon.hasFilledScreen);

   return (
      <div css={baseCss} className={`text-primary ${screenIsFilledWithHexagons ? 'opacity-100' : 'opacity-0'}`}>
         <div className="flex flex-col justify-center w-full" css={max600Css}>
            <Welcome />
            <About />
            <Projects />
            <Work />
         </div>
      </div>
   );
}

export default ContentFrame;
