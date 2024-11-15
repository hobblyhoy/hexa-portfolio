/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useAppSelector } from '../../app/hooks';
import Welcome from '../welcome/Welcome';
import About from '../about/About';
import useBreakpoint from '../customHooks/useBreakpoint';
import Projects from '../projects/Projects';
import Work from '../work/Work';
import Contact from '../contact/Contact';

function ContentFrame() {
   const { isDesktop } = useBreakpoint();
   const baseCss = css`
      display: flex;
      margin-left: ${isDesktop ? '50%' : 'unset'};
      ${isDesktop
         ? `padding-left: 40px;
            padding-right: 40px;
            padding-top: 80px;
            padding-bottom: 60px;`
         : 'padding: 30px;'}
      justify-content: center;
      position: ${isDesktop ? 'unset' : 'relative'};
      z-index: ${isDesktop ? 0 : 2};
   `;

   const max600Css = css`
      max-width: ${isDesktop ? '600px' : 'unset'};
   `;

   const screenIsFilledWithHexagons = useAppSelector(
      store => store.hexagon.hasFilledScreen
   );

   return (
      <div
         css={baseCss}
         className={`text-primary ${
            screenIsFilledWithHexagons ? 'opacity-100' : 'opacity-0'
         }`}
      >
         <div className="flex flex-col justify-center w-full" css={max600Css}>
            <Welcome />
            <About />
            <Projects />
            <Work />
            <Contact />
         </div>
      </div>
   );
}

export default ContentFrame;
