import { useState } from 'react';
import { faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import ProjectLink from './ProjectLink';
import useBreakpoint from '../customHooks/useBreakpoint';
import ProjectLinkMini from './ProjectLinkMini';
import WhiteHoverCard from '../structure/WhiteHoverCard';
import TagsList from '../structure/Tags';

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
      <WhiteHoverCard>
         <div
            className={`grid grid-cols-[auto,1fr] gap-x-3 gap-y-2 p-3 ${
               !isDesktop ? 'pl-0' : ''
            } cursor-default`}
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
                     <div
                        className={`absolute w-full h-full top-0 flex ${hoveredFadeIn}`}
                     >
                        {links.map(link => (
                           <ProjectLink {...link} key={link.url} />
                        ))}
                     </div>
                  )}

                  {/* Links for screen readers */}
                  {isDesktop &&
                     links.map(link => (
                        <ProjectLinkMini {...link} isScreenReader={true} key={link.url} />
                     ))}
               </div>
            </div>
            <div className="col-start-2 row-start-3">
               <TagsList tags={tags} />
            </div>

            {/* Mobile inline source and site links */}
            {!isDesktop && (
               <div className="col-start-2 row-start-4">
                  {links.map(link => (
                     <ProjectLinkMini {...link} isScreenReader={false} key={link.text} />
                  ))}
               </div>
            )}
         </div>
      </WhiteHoverCard>
   );
}

export default Project;
