import React from 'react'
import './index.css'
import { FiGithub } from 'react-icons/fi'

export default function ProjectContainer({...props}){
    return (
        <div className="projectcontainer">
            <div className="projectimg">
                <img src={props.src} alt={props.alt} />
            </div>
            <div className="projectheader">{props.title}</div>
            <div className="projectinfo">{props.info}</div>
            <div className="projectfooter"><p>{props.footer}</p><a href={props.githublink}><FiGithub className="githubicon"/></a></div>
            
        </div>
    )
}