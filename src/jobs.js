import React, {useState, useEffect} from 'react';
import Job from './job.js';
import Filter from './filter.js';







export default function Jobs(){

  let [jobs, setJobs] = useState ({
    jobList: [
      {
      jobImg: 'images/photosnap.svg',
      company: 'Photosnap',
      job: 'Senior Frontend Developer',
      info: '1d ago - Full Time - USA only',
      related: ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'],
      },
      {
      jobImg: 'images/myhome.svg',
      company: 'MyHome',
      job: 'Junior Frontend Developer',
      info: '5d ago - Contract - USA only',
      related: ['Frontend', 'Junior', 'JavaScrpt', 'CSS'],
      },
      {
      jobImg: 'images/manage.svg',
      company: 'Manage',
      job: 'Fullstack Developer',
      info: '5d ago - Part Time - Remote',
      related: ['Fullstack', 'Midweight', 'React', 'Python'],
      },
      {
      jobImg: 'images/account.svg',
      company: 'Account',
      job: 'Junior Frontend Developer',
      info: '5d ago - Part Time - USA only',
      related: ['Frontend', 'Junior', 'React', 'Sass', 'JavaScript'],
      },
      {
      jobImg: 'images/loop-studios.svg',
      company: 'Loop Studios',
      job: 'Software Engineer',
      info: '1w ago - Full Time - Worldwide',
      related: ['Fullstack', 'Midweight', 'JavaScrpt', 'Sass', 'Ruby'],
      },
      {
      jobImg: 'images/faceit.svg',
      company: 'FaceIt',
      job: 'Junior Backend Developer',
      info: '1w ago - Full Time - UK only',
      related: ['Backend', 'Junior', 'Ruby', 'RoR'],
      },
      {
      jobImg: 'images/shortly.svg',
      company: 'Shortly',
      job: 'Junior Developer',
      info: '1w ago - Full Time - Worldwide',
      related: ['Frontend', 'Junior', 'HTML', 'JavaScript', 'Sass'],
      },
      {
      jobImg: 'images/insure.svg',
      company: 'Insure',
      job: 'Junior Frontend Developer',
      info: '2w ago - Full Time - USA only',
      related: ['Frontend', 'Junior', 'JavaScrpt', 'Vue', 'Sass'],
      },
      {
      jobImg: 'images/eyecam-co.svg',
      company: 'Eyecam Co.',
      job: 'Full Stack Engineer',
      info: '3w ago - Full Time - Worldwide',
      related: ['Full Stack', 'Midweight', 'JavaScrpt', 'Django', 'Python'],
      },
      {
      jobImg: 'images/the-air-filter-company.svg',
      company: 'The Air Filter Company',
      job: 'Front-end Dev',
      info: '1mo ago - Part Time - Worldwide',
      related: ['Frontend', 'Junior', 'JavaScrpt', 'React', 'Sass'],
      },
  ]
  })


    return (
        <div className='sec-container'>
          <Filter jobs={jobs.jobList}/>
            {
            jobs.jobList.map(({ jobImg, company, job, info, related }) => (
              <Job
                jobImg={jobImg}
                company={company}
                job={job}
                info={info}
                related={related}
                key= {company}
              />
            ))
          }
        </div>
    )
}