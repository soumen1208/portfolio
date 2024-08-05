import React, { useContext } from 'react'
import '../Services/service.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from '../Services/Soumen Mahato Resume.pdf';
import { themeContext } from '../../Context/Context';
import { motion } from 'framer-motion';


const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration: 2, type: 'spring' }


    return (
        <div className="services" id='Service'>

            {/* Left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
                <span>services</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, corrupti!
                    <br />
                    Lorem ipsum dolor sit amet mfmakmfka
                </span>
                <a href={Resume} download>
                    <button className='button s-button'>Download CV</button>
                </a>
                <div className="blurdiv1 s-blur1"></div>

            </div>

            {/* Right side */}
            <motion.div
                initial={{ left: '20%' }}
                whileInView={{ left: '0' }}
                transition={transition}
                className="cards">
                <div style={{ left: "25rem" }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"nsnkjan,kjfnakjna,kjnkjanfan,annafnaln,flanlasn, vajfakjbfkflabfkalfbakjfavf,"}
                    />
                </div>
                <div style={{ left: "2rem", top: "12rem" }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={"ffnjnk, nslkja, jjsjjjjjjjjjjj, llllllll, jjjjjjjj"}
                    />
                </div>
                <div style={{ left: "20rem", top: "20rem" }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={"kukur prani"}
                    />
                </div>
                <div className="blurdiv2 s-blur2"></div>
            </motion.div>

        </div>
    )
}

export default Services