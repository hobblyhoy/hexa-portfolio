/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faArrowUpRightFromSquare,
   faGlobe,
   faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import ProjectLink from './ProjectLink';
import useBreakpoint from '../customHooks/useBreakpoint';

export interface IProjectProps {
   title: string;
   description: string;
   image: string;
   tags: string[];
   codeUrl?: string;
   siteUrl?: string;
}

function Project({ title, description, image, tags, codeUrl, siteUrl }: IProjectProps) {
   const [isHovered, setIsHovered] = useState(false);
   const { isDesktop } = useBreakpoint();
   //const isHovered = true;

   useEffect(() => {
      console.log({ hovered: isHovered });
   }, [isHovered]);

   const transOpacity = 'transition-opacity duration-500 ease-in-out';
   const hoveredFadeIn = `opacity-${isHovered ? '100' : '0'} ${transOpacity}`;
   const hoveredFadeOut = `opacity-${isHovered ? '0' : '100'} ${transOpacity}`;

   const transAll = 'transition duration-500 ease-in-out';
   const hoveredBgFadeIn = `bg-opacity-${isHovered ? '5' : '0'} ${transAll}`;

   // TODO need to handle ADA compliance for those hidden links
   return (
      <div
         className={`grid gap-3 p-3 bg-white rounded-md cursor-default ${hoveredBgFadeIn}`}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         {isDesktop && (
            <div className="row-span-3 place-self-center">
               <img className="w-36 h-36" src={image} />
            </div>
         )}
         <div className="text-xl">{title}</div>
         <div className="col-start-2 roboto-light">
            <div className="relative">
               <div className={isDesktop ? hoveredFadeOut : ''}>{description}</div>
               {isDesktop && (
                  <div className={`absolute w-full h-full top-0 flex ${hoveredFadeIn}`}>
                     {codeUrl && (
                        <ProjectLink
                           icon={faGithub}
                           text="Source Code"
                           url={codeUrl}
                           location={siteUrl ? 'left' : 'full'}
                        />
                     )}
                     {siteUrl && (
                        <ProjectLink
                           icon={faPaperPlane}
                           text="Hosted"
                           url={siteUrl}
                           location={codeUrl ? 'right' : 'full'}
                        />
                     )}
                  </div>
               )}
            </div>
         </div>
         <div className="col-start-2 row-start-3">
            {tags.map(tag => (
               <span className="mr-3">{tag}</span>
            ))}
         </div>
      </div>
   );
}

export default Project;
