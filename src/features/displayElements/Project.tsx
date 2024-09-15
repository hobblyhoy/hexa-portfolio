export interface IProjectProps {
   title: string;
   description: string;
   image: string;
   tags: string[];
   codeLink: string;
   siteLink: string;
}

function Project({ title, description, image, tags, codeLink, siteLink }: IProjectProps) {
   return (
      <div className="flex">
         <div>Image here</div>
         <div>Remaining Content</div>
      </div>
   );
}

export default Project;
