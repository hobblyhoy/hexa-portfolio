import Header from '../structure/Header';
import quiltiImage from '../../assets/project_images/quilti.jpg';
import tinyTown from '../../assets/project_images/tiny-town.jpg';
import pingTrack from '../../assets/project_images/ping-track.jpg';
import letsMeetOn from '../../assets/project_images/lets-meet-on.jpg';
import commForward from '../../assets/project_images/comm-forward.jpg';
import portfolio from '../../assets/project_images/portfolio.jpg';
import Project, { IProjectProps } from '../projects/Project';

function Projects() {
   const projects: IProjectProps[] = [
      {
         title: 'Tiny Town',
         description:
            'A relaxing town builder.' +
            ' Created as a challenge to build something outside the typical website structure.' +
            ' Everything but the assets themselves are created from scratch including pan & scale, click & drag, animation, tile placement, and sound effects.' +
            ' No other external libraries or Canvas elements.',
         image: tinyTown,
         tags: ['React', 'Redux', 'TypeScript'],
         codeUrl: 'https://github.com/hobblyhoy/little-town/',
         siteUrl: 'https://hobblyhoy.github.io/little-town/',
      },
      {
         title: 'Quilti',
         description:
            'A user driven image collection site where anyone can contribute to an infinite quilt of artworks.' +
            ' Created during a time restricted build challenge going from idea generation to hosted solution in under 40 hours.' +
            ' This project is heavily cached at all layers and required many rounds of trade-off analysis in order for it to work well under my limited hosting resources.',
         image: quiltiImage,
         tags: ['React', 'Fabric.js', 'Canvas', '.NET'],
         codeUrl: 'https://github.com/hobblyhoy/Quilti/',
         siteUrl: 'http://quilti.net/',
      },
      {
         title: 'PingTrack',
         description:
            'A standalone desktop application to constantly ping and chart the responses of an unlimited number of hosts. This was my first project with Tyescript and gave me a deeper understanding of OS integration.',
         image: pingTrack,
         tags: ['React', 'Electron', 'Typescript'],
         codeUrl: 'https://github.com/hobblyhoy/PingTrack/',
      },
      {
         title: "Let's Meet On",
         description:
            'A web app to take a group of people’s schedules and display the times when everyone is available.' +
            ' One of my earliest software projects but remains useful and still gets active users.',
         image: letsMeetOn,
         tags: ['Vue.js', '.NET', 'Entity Framework', 'SignalR', 'SendGrid', 'Moment.js'],
         siteUrl: 'https://letsmeeton.com/',
      },
      {
         title: 'Comm Forward',
         description:
            'A minimalist app to communicate needs and feelings.' +
            ' Created for my grandfather who had fallen ill and had difficulty speaking. ' +
            ' Features a simple to use, tablet-friendly design and a customizable interface.',
         image: commForward,
         tags: ['Vue.js'],
         siteUrl: 'https://hobblyhoy.github.io/CommForward/',
         codeUrl: 'https://github.com/hobblyhoy/CommForward/',
      },
      {
         title: 'Portfolio v2',
         description:
            'My previous portfolio website.' +
            ' Features a mouse tracked animation of my face which was technically interesting to solve and popular but also polarizing.' +
            ' This site is the refresh that goes along with pulling that feature out.',
         image: portfolio,
         tags: ['React', 'Typescript'],
         siteUrl: 'https://hobblyhoy.github.io/portfolio/',
         codeUrl: 'https://github.com/hobblyhoy/portfolio/',
      },
   ];

   return (
      <div className="mt-24" id="projects">
         <Header text="Projects" />
         {projects.map(proj => (
            <div className="mb-10" key={proj.title}>
               <Project {...proj} />
            </div>
         ))}
      </div>
   );
}

export default Projects;
