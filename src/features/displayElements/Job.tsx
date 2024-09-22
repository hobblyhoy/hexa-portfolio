export interface IJobProps {
   title: string;
   companyName: string;
   duration: string;
   description: string;
   tags: string[];
}

function Job({ title, companyName, duration, description, tags }: IJobProps) {
   return (
      <div className="grid gap-1 p-3 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md">
         <div className="text-xl text-accent">{title}</div>
         <div className="justify-self-end roboto-light text-sm self-center">
            {duration}
         </div>
         <div className="col-span-2 row-start-2 text-lg">{companyName}</div>
         <div className="col-span-2 row-start-3 roboto-regular">{description}</div>
         <div className="col-span-2 row-start-4">
            {tags.map((tag, index) => (
               <span className="mr-3" key={index}>
                  {tag}
               </span>
            ))}
         </div>
      </div>
   );
}

export default Job;
