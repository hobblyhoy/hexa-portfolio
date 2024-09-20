import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
   text: string;
   url: string;
   isScreenReader: boolean;
}

function ProjectLinkMini({ text, url, isScreenReader }: IProps) {
   return (
      <a
         href={url}
         target="_blank"
         rel="noreferrer"
         className={isScreenReader ? 'sr-only' : 'mr-4'}
      >
         {text}
         <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2 text-xs" />
      </a>
   );
}

export default ProjectLinkMini;
