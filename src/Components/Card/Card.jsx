import React from 'react'
import './card.css'

const Card = ({ emoji, heading, detail }) => {
    return (
        <div className="card">
            <img src={emoji} alt="" />
            <span> {heading} </span>
            <span> {detail} </span >
            <button className='c-button'>LERN MORE</button>
        </div >
    )
}

export default Card