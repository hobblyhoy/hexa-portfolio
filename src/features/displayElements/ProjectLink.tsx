import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
   icon: IconDefinition;
   text: string;
   url: string;
   location: 'left' | 'right' | 'full';
}
function ProjectLink({ icon, text, url, location }: IProps) {
   let locationClasses = '';
   if (location === 'left') {
      locationClasses = 'w-1/2 mr-1';
   } else if (location === 'right') {
      locationClasses = 'w-1/2 ml-1';
   } else {
      locationClasses = 'w-full';
   }

   return (
      <a
         className={`flex flex-col flex-wrap place-content-center ${locationClasses} border-dashed rounded-3xl border-2`}
         href={url}
         target="_blank"
         rel="noreferrer"
      >
         <FontAwesomeIcon icon={icon} size="2x" />
         <div className="mt-3">
            {text}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2 text-xs" />
         </div>
      </a>
   );
}

export default ProjectLink;
