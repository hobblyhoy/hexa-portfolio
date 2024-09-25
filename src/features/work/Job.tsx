import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WhiteHoverCard from '../structure/WhiteHoverCard';
import TagsList from '../structure/Tags';

export interface IJobProps {
   title: string;
   companyName: string;
   start: string;
   end: string;
   description: string;
   tags: string[];
}

function Job({ title, companyName, start, end, description, tags }: IJobProps) {
   return (
      <WhiteHoverCard>
         <div className="grid gap-1 p-3">
            <div className="text-xl text-accent">{title}</div>
            <div className="justify-self-end roboto-light text-sm self-center">
               {start}
               <FontAwesomeIcon icon={faRightLong} className="mx-2" />
               {end}
            </div>
            <div className="col-span-2 row-start-2 text-lg">{companyName}</div>
            <div className="col-span-2 row-start-3 roboto-light">{description}</div>
            <div className="col-span-2 row-start-4">
               <TagsList tags={tags} />
            </div>
         </div>
      </WhiteHoverCard>
   );
}

export default Job;
