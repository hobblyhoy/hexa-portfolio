/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from '../structure/Header';
import Job, { IJobProps } from './Job';

function Work() {
   const jobs: IJobProps[] = [
      {
         title: 'Software Engineer',
         companyName: 'iGrad Financial Wellness',
         description: 'TODO',
         tags: [
            'JavaScript',
            'TypeScript',
            'React',
            'C#',
            '.NET',
            'Cosmos',
            'SQL Server',
         ],
         start: '2019',
         end: 'Current',
      },
      {
         title: 'Software Developer',
         companyName: 'MREN',
         description: 'TODO',
         tags: ['JavaScript', 'Knockout', 'C#', 'ASP.NET', 'SQL Server', 'Selenium'],
         start: '2016',
         end: '2018',
      },
      {
         title: 'Business Intelligence and IT Administrator',
         companyName: 'iTAN Franchising',
         description: 'TODO',
         tags: ['SQL Server', 'SSRS', 'IT'],
         start: '2012',
         end: '2016',
      },
   ];

   return (
      <div className="mt-24" id="work">
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
