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
   let sizingClasses = '';
   if (location == 'left') {
      sizingClasses = 'w-1/2 mr-1';
   } else if (location == 'right') {
      sizingClasses = 'w-1/2 ml-1';
   } else {
      sizingClasses = 'w-full';
   }

   return (
      <a
         className={`flex flex-col flex-wrap place-content-center ${sizingClasses} border-dashed rounded-3xl border-2`}
         href={url}
         target="_blank"
      >
         <FontAwesomeIcon icon={icon} size="3x" />
         <div className="mt-3">
            {text}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2 text-xs" />
         </div>
      </a>
   );
}

export default ProjectLink;
