import { useState } from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import ProjectLink from './ProjectLink';
import useBreakpoint from '../customHooks/useBreakpoint';
import ProjectLinkMini from './ProjectLinkMini';
import WhiteHoverCard from '../structure/WhiteHoverCard';
import TagsList from '../structure/Tags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { generateLinks } from './ProjectUtils';

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

   const links = generateLinks(codeUrl, siteUrl);

   const ApplicationImage = () => (
      <img className="w-36 h-36" src={image} alt={`Screenshot of application ${title}`} />
   );

   const Title = () => (
      <h3 className="text-2xl text-accent">
         {title}
         {isDesktop && (
            <span className="ml-2 text-lg">
               <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </span>
         )}
      </h3>
   );

   const DescriptionWithLinkHover = () => (
      <div className="relative roboto-light">
         <div className={hoveredFadeOut}>{description}</div>
         {/* Source and site links hover overlay */}
         <div className={`absolute w-full h-full top-0 flex ${hoveredFadeIn}`}>
            {links.map(link => (
               <ProjectLink {...link} key={link.url} />
            ))}
         </div>

         {/* Links for screen readers */}
         {links.map(link => (
            <ProjectLinkMini {...link} isScreenReader={true} key={link.url} />
         ))}
      </div>
   );

   const DescriptionMobile = () => <div className="roboto-light">{description}</div>;

   const LinksMobile = () => (
      <div>
         {links.map(link => (
            <ProjectLinkMini {...link} isScreenReader={false} key={link.text} />
         ))}
      </div>
   );

   return (
      <WhiteHoverCard>
         {isDesktop ? (
            // Desktop Layout
            <div
               className={`grid grid-cols-[auto,1fr] gap-x-3 gap-y-2 p-3`}
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}
            >
               <div className="row-span-3 place-self-center">
                  <ApplicationImage />
               </div>
               <div className="col-start-2">
                  <Title />
               </div>
               <div className="col-start-2">
                  <DescriptionWithLinkHover />
               </div>
               <div className="col-start-2">
                  <TagsList tags={tags} />
               </div>
            </div>
         ) : (
            // Mobile / Tablet Layout
            <div className="flex flex-col gap-3 p-3">
               <Title />
               <ApplicationImage />
               <DescriptionMobile />
               <LinksMobile />
            </div>
         )}
      </WhiteHoverCard>
   );
}

export default Project;
