import Header from '../displayElements/Header';
import quiltiImage from '../../assets/project_images/quilti.jpg';
import Project, { IProjectProps } from '../displayElements/Project';

function Projects() {
   const projects: IProjectProps[] = [
      {
         title: 'Quilti',
         description:
            'A user driven image collection site where anyone can contribute to an infinite quilt of artworks.' +
            ' Created during a time restricted build challenge going from idea generation to hosted solution in under 40 hours.' +
            ' This project is heavily cached at all layers and required many rounds of trade-off analysis in order for it to work well under my limited hosting resources.',
         image: quiltiImage,
         tags: ['React', 'Fabric.js', 'Canvas', '.NET'],
         codeUrl: 'https://github.com/TODO',
         siteUrl: 'https://google.com/',
      },
      {
         title: 'Demo2',
         description:
            'A user driven image collection site where anyone can contribute to an infinite quilt of artworks.' +
            ' Created during a time restricted build challenge going from idea generation to hosted solution in under 40 hours.' +
            ' This project is heavily cached at all layers and required many rounds of trade-off analysis in order for it to work well under my limited hosting resources.',
         image: quiltiImage,
         tags: ['React', 'Fabric.js', 'Canvas', '.NET'],
         codeUrl: 'https://github.com/TODO',
      },
   ];

   return (
      <div className="mt-24" id="projects">
         <Header text="Projects" />
         {projects.map(x => (
            <div className="mb-10"><Project {...x} /></div>
         ))}
      </div>
   );
}

export default Projects;
