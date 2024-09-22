/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from '../displayElements/Header';
import Job, { IJobProps } from '../displayElements/Job';

function Work() {
   const jobs: IJobProps[] = [
      {
         title: 'Software Engineer',
         companyName: 'iGrad Financial Wellness',
         duration: '2019 => Current',
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
      },
      {
         title: 'Software Developer',
         companyName: 'MREN',
         duration: '2016 => 2018',
         description: 'TODO',
         tags: ['JavaScript', 'Knockout', 'C#', 'ASP.NET', 'SQL Server', 'Selenium'],
      },
      {
         title: 'Business Intelligence and IT Administrator',
         companyName: 'iTAN Franchising',
         duration: '2012 => 2016',
         description: 'TODO',
         tags: ['SQL Server', 'SSRS', 'IT'],
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
