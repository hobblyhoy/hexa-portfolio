import { faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export interface ILink {
   text: string;
   url: string;
   icon: IconDefinition;
   location: 'left' | 'right' | 'full';
}

export const generateLinks = (codeUrl?: string, siteUrl?: string) => {
   let links: ILink[] = [];

   if (codeUrl)
      links.push({ text: 'Source', url: codeUrl, icon: faGithub, location: 'left' });
   if (siteUrl)
      links.push({ text: 'Hosted', url: siteUrl, icon: faPaperPlane, location: 'right' });
   
   if (links.length === 1) links[0].location = 'full';

   return links;
};
