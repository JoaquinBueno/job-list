import React from 'react';
import './job.css';



export default function Job({jobImg, company, job, info, related}) {
    return (
        <div className="card">
            <img src={jobImg} alt=""/>
            <div className="company-style">
                <p>{company}</p>
            </div>
            <div className="job-name">
                <h2>{job}</h2>
            </div>
            <div className="info">
                <p className='info-text'>{info}</p>
            </div>
            <div className="filters">
                <p className='filter'>{related[0]}</p>
                <p className='filter'>{related[1]}</p>
                <p className='filter'>{related[2]}</p>
                <p className='filter'>{related[3]}</p>
                <p className='filter'>{related[4]}</p>
            </div>
        </div>
    )
}