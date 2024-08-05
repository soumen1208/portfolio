import React, { useContext } from 'react'
import './experience.css'


const Experience = () => {

    return (
        <div className="experience" id='Experience'>
            <div className="achivement">
                <div className="circle">1</div>
                <span>Years</span>
                <span>Experience</span>
            </div>
            <div className="achivement">
                <div className="circle">1</div>
                <span>Completed</span>
                <span>Projects</span>
            </div>
            <div className="achivement">
                <div className="circle">1</div>
                <span>Training</span>
                <span>Companies</span>
            </div>
        </div>
    )
}

export default Experience