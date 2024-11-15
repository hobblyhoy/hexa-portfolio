/** @jsxImportSource @emotion/react */
import { useEffect, useMemo, useState } from 'react';
import { css, keyframes } from '@emotion/react';
import hexagonImage from '../../assets/sketchup_hexa_v4.png';
import hexagonProjects from '../../assets/sketchup_hexa_projects.png';
import hexagonAbout from '../../assets/sketchup_hexa_about.png';
import hexagonWork from '../../assets/sketchup_hexa_work.png';
import hexagonContact from '../../assets/sketchup_hexa_contact.png';
import {
   HEXAGON_FADE_TIME,
   HEXAGON_FLOAT_HEIGHT_DESKTOP,
   HEXAGON_FLOAT_HEIGHT_MOBILE,
   HEXAGON_OSCILLATION_RANGE,
   HEXAGON_START_DELAY_RANGE,
   HEXAGON_TILE_WIDTH,
} from '../../app/constants';
import { HexagonStyle, IHexagon } from './HexagonTypes';
import { useAppSelector } from '../../app/hooks';
import useBreakpoint from '../customHooks/useBreakpoint';
import { random } from 'lodash';

function HexagonTile({ style, isoCoords, cartCoords, id, isVisible }: IHexagon) {
   const delay = HEXAGON_START_DELAY_RANGE;
   const randomStartDelay = useMemo(() => random(delay[0], delay[1], true), []);

   const osc = HEXAGON_OSCILLATION_RANGE;
   const randomOscillationPhase = useMemo(() => random(osc[0], osc[1], true), []);

   const loadingAnimationFinished = useAppSelector(store => store.hexagon.hasRevealed);
   const { isDesktop } = useBreakpoint();

   // Deactivation once opacity reaches 0 so that click events and whatnot are not
   // erroneously caught here and browser doesn't need to continue processing the animation
   const [isDeactivated, setIsDeactivated] = useState(false);
   useEffect(() => {
      if (isVisible === false) {
         setTimeout(() => setIsDeactivated(true), HEXAGON_FADE_TIME);
      }
   }, [isVisible]);

   const floatHeight = isDesktop
      ? HEXAGON_FLOAT_HEIGHT_DESKTOP
      : HEXAGON_FLOAT_HEIGHT_MOBILE;

   const slideUpDown = keyframes`
      0% { top: ${cartCoords.cartY}px; }
      10% { top: ${cartCoords.cartY}px; }
      40% { top: ${cartCoords.cartY + floatHeight}px; }
      60% { top: ${cartCoords.cartY + floatHeight}px; }
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
      width: ${HEXAGON_TILE_WIDTH}px;
      cursor: ${style === 'standard' ? 'unset' : 'pointer'};
      opacity: ${isVisible ? 1 : 0};
      transition: opacity ${HEXAGON_FADE_TIME / 1000}s ease-in-out,
         top ${HEXAGON_FADE_TIME / 1000}s ease-in-out;
      display: ${isDeactivated ? 'none' : 'block'};
      z-index: 1;
      pointer-events: ${isDesktop ? 'unset' : 'none'};
   `;

   const animationCss = css`
      animation: ${slideUpDown};
      animation-duration: ${randomOscillationPhase}s;
      animation-delay: ${randomStartDelay}s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
   `;

   const imgCss = () => {
      if (!isDesktop) {
         return css`
            opacity: 0.1;
         `;
      }

      if (loadingAnimationFinished && style === 'standard') {
         return css`
            opacity: 1;
            transition: opacity 0.66s ease-in-out;
            &:hover {
               opacity: 0.75;
            }
         `;
      }

      return null;
   };

   const mapStyleToImageSrc = (style: HexagonStyle) => {
      switch (style) {
         case 'about':
            return hexagonAbout;
         case 'projects':
            return hexagonProjects;
         case 'work':
            return hexagonWork;
         case 'contact':
            return hexagonContact;
         default:
            throw new Error(`Unknown style: ${style}`);
      }
   };

   const hasRevealed = useAppSelector(store => store.hexagon.hasRevealed);

   if (style === 'standard') {
      return (
         <div
            css={css`
               ${baseCss}${hasRevealed && animationCss}
            `}
            data-iso-id={id}
         >
            <img src={hexagonImage} css={imgCss()} alt="" />
         </div>
      );
   } else {
      return (
         <div css={baseCss} data-iso-id={id}>
            <a href={`#${style}`}>
               <img src={mapStyleToImageSrc(style)} css={imgCss()} alt={`Jump to ${style} section`} />
            </a>
         </div>
      );
   }
}

export default HexagonTile;
