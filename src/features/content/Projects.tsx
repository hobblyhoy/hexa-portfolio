import Header from '../displayElements/Header';
import quiltiImage from '../../assets/project_images/quilti.jpg';
import Project, { IProjectProps } from '../displayElements/Project';

function Projects() {
   const projects: IProjectProps[] = [
      {
         title: 'Quilti',
         description:
            'A user driven image collection site where anyone can contribute to an infinite quilt of artworks. This was built using React and utilizes the Canvas and Fabric.js libraries. This project is heavily cached at all layers and required many rounds of trade-off analysis in order for it to work well under my limited hosting resources.',
         image: quiltiImage,
         tags: ['BXN', 'Blork Kit', 'JimJamicks'],
         codeLink: 'https://github.com/TODO',
         siteLink: 'https://google.com/',
      },
   ];

   return (
      <div className="mt-24" id="projects">
         <Header text="Projects" />
         {projects.map(x => (
            <Project {...x} />
         ))}
      </div>
   );
}

export default Projects;
