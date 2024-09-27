import Header from '../structure/Header';
import Job, { IJobProps } from './Job';

function Work() {
   const jobs: IJobProps[] = [
      {
         title: 'Software Engineer',
         companyName: 'Enrich Financial Wellness',
         description: `I currently work as a full stack engineer on the React/.NET stack. I played a key role in transitioning the company's frontend from AngularJS to React and led the migration from VFS to Git, providing support through policies, documentation, and troubleshooting. Additionally, I researched and implemented Database Projects IaC allowing us to integrate automated database deployments into our Azure DevOps pipeline. I also serve as a technical liaison, bridging communication between department heads and providing research and technology proposals.`,
         tags: [
            'JavaScript',
            'TypeScript',
            'React',
            'C#',
            '.NET',
            'Cosmos DB',
            'SQL Server',
         ],
         start: '2019',
         end: 'Current',
      },
      {
         title: 'Software Developer',
         companyName: 'MREN',
         description:
            'At MREN Inc. I worked as a junior full stack developer, utilizing various frontend libraries and frameworks for single-page application development and C# with ASP.NET for backend work. I implemented a site-wide IndexedDB caching solution, significantly reducing load times. Additionally, I developed an integration testing tool using image histogram differences with BrowserStack and Selenium, built utilities for system statistics with automated email reports, and created an activity monitoring system that enhanced customer support capabilities.',
         tags: ['JavaScript', 'Knockout', 'C#', 'ASP.NET', 'SQL Server', 'Selenium'],
         start: '2016',
         end: '2018',
      },
      {
         title: 'Business Intelligence and IT Administrator',
         companyName: 'iTAN Franchising',
         description:
            'At iTAN I ran the IT operations in support of the corporate office and franchise locations. This included managing corporate and in-store networking, POS systems, and IT infrastructure while also advising on business trends through custom SQL and SSRS reporting. I built and deployed a fully automated in-store music and digital signage system using Python and Bash, streamlining marketing content updates and ensuring seamless control over deployments. As the company grew I became the manager of a small team who took over the day to day IT operations.',
         tags: ['IT Management', 'SQL Server', 'SSRS'],
         start: '2012',
         end: '2016',
      },
   ];

   return (
      <div className="mt-12 lg:mt-16" id="work">
         <Header text="Work" />
         {jobs.map(job => (
            <div className="mb-4" key={job.title}>
               <Job {...job} />
            </div>
         ))}
      </div>
   );
}

export default Work;
