import React, { useContext } from 'react'
import './works.css'
import Fiverr from '../../img/fiverr.png';
import Upwork from '../../img/Upwork.png';
import Shopify from '../../img/Shopify.png';
import Amazon from '../../img/amazon.png';
import Facebook from '../../img/Facebook.png';
import { themeContext } from '../../Context/Context';
import { motion } from 'framer-motion';


const Works = () => {

    // const transition = { duration: 2, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


    return (
        <div className="works">
            {/* left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>Works for all these</span>
                <span>Brands and Client</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, corrupti!
                    <br />
                    Lorem ipsum dolor sit amet mfmakmfka
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quam alias culpa?
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, neque.
                </span>
                <button className='button s-button'>Hire Me</button>
                {/* <div className="blurdiv1 s-blur1"></div> */}

            </div>

            {/* right side */}
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 3.5, type: 'spring' }}
                    className="w-maincircle">
                    <div className="w-seccircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-seccircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-seccircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-seccircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-seccircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>

                {/* backgorund circle */}
                <div className="w-backcircle bluecircle"></div>
                <div className="w-backcircle yellowcircle"></div>
            </div>

        </div>
    )
}

export default Works