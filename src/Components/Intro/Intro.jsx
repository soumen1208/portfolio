import React, { useContext } from 'react'
import '../Intro/intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context/Context';
import { motion } from 'framer-motion';


const Intro = () => {

    const transition = { duration: 2, type: 'spring' }

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">

                    <span style={{ color: darkMode ? 'white' : '' }}>Hii! I Am</span>
                    <span>Soumen Mahato</span>
                    <span>Full Stack Developer with 1 year
                        hand on experience in web designing and
                        developing web application, producting the
                        quality work
                    </span>

                </div>

                <button className='button i-button'>Hire Me</button>
                <div className="i-icons">
                    <a href="">
                        <img src={Github} alt="" />
                    </a>
                    <a href="">
                        <img src={Linkedin} alt="" />
                    </a>
                    <a href="">
                        <img src={Instagram} alt="" />
                    </a>
                </div>
            </div>

            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Boy} alt="" />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-20%' }}
                    transition={transition}
                    src={Glassesimoji} alt="" />

                <motion.div
                    initial={{ left: '70%' }}
                    whileInView={{ left: '60%' }}
                    transition={transition}
                    style={{ top: "-4%", left: "68%" }}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                </motion.div>

                <motion.div
                    initial={{ left: '-30%' }}
                    whileInView={{ left: '-10%' }}
                    transition={transition}
                    className='thumb'>
                    <FloatingDiv image={Thumbup} txt1='Best Design' txt2='Award' />
                </motion.div>
                <div className="blurdiv1"></div>
                <div className="blurdiv2" ></div>

            </div>

        </div >
    )
}

export default Intro