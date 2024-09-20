import { useState } from 'react';
import { faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import ProjectLink from './ProjectLink';
import useBreakpoint from '../customHooks/useBreakpoint';
import ProjectLinkMini from './ProjectLinkMini';

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

   const transOpacity = 'transition-opacity duration-500 ease-in-out';
   const hoveredFadeIn = `opacity-${isHovered ? '100' : '0'} ${transOpacity}`;
   const hoveredFadeOut = `opacity-${isHovered ? '0' : '100'} ${transOpacity}`;

   const transAll = 'transition duration-500 ease-in-out';
   const hoveredBgFadeIn = `bg-opacity-${isHovered ? '5' : '0'} ${transAll}`;

   interface ILink {
      text: string;
      url: string;
      icon: IconDefinition;
      location: 'left' | 'right' | 'full';
   }

   let links: ILink[] = [];
   if (codeUrl)
      links.push({ text: 'Source', url: codeUrl, icon: faGithub, location: 'left' });
   if (siteUrl)
      links.push({ text: 'Hosted', url: siteUrl, icon: faPaperPlane, location: 'right' });
   if (links.length === 1) links[0].location = 'full';

   return (
      <div
         className={`grid grid-cols-[auto,1fr] gap-x-3 gap-y-2 p-3 bg-white rounded-md cursor-default ${hoveredBgFadeIn}`}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         <div className="row-span-3 place-self-center">
            {isDesktop && (
               <img
                  className="w-36 h-36"
                  src={image}
                  alt={`Screenshot of application ${title}`}
               />
            )}
         </div>
         <div className="text-2xl text-accent">{title}</div>
         <div className="col-start-2 roboto-light">
            <div className="relative">
               <div className={isDesktop ? hoveredFadeOut : ''}>{description}</div>
               {/* Source and site links hover overlay */}
               {isDesktop && (
                  <div className={`absolute w-full h-full top-0 flex ${hoveredFadeIn}`}>
                     {links.map(link => (
                        <ProjectLink {...link} />
                     ))}
                  </div>
               )}

               {/* Links for screen readers */}
               {isDesktop &&
                  links.map(link => <ProjectLinkMini {...link} isScreenReader={true} />)}
            </div>
         </div>
         <div className="col-start-2 row-start-3">
            {tags.map((tag, index) => (
               <span className="mr-3" key={index}>
                  {tag}
               </span>
            ))}
         </div>

         {/* Simpler mobile inline source and site links */}
         {!isDesktop && (
            <div className="col-start-2 row-start-4">
               {links.map(link => (
                  <ProjectLinkMini {...link} isScreenReader={false} key={link.text} />
               ))}
            </div>
         )}
      </div>
   );
}

export default Project;
