import React, {useState, useEffect} from 'react';
import Job from './job.js'
import './filter.css'

export default function Filter({jobs}) {
    
    let [search, setSearch] = useState('');
  
  
    
    const filteredJobs = jobs.filter(job => {
      return job.related.includes(search)})
    
    return (
        <div className='filter-container'>
            <div className='filtered'>
                <input type='text' className='filter-input' placeholder='Apply Filter' onChange={e => setSearch(e.target.value)}/>
            </div>
            <div className='jobs-filtered'>
                {
                filteredJobs.map(({ jobImg, company, job, info, related }) => (
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
        </div>
    )
}