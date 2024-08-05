import React, { useContext } from 'react'
import './experience.css'
import { themeContext } from '../../Context/Context';

const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;



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