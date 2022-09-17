import React from "react";
import Tilt from 'react-parallax-tilt';
/* import './ParallaxEffectImg.demozap.scss'; */
import Fellowship from './Fellowship.png';


const Logo = () => {
    return (
        /*  <Tilt
             className="parallax-effect-img br2 shadow-2"
             tiltMaxAngleX={40}
             tiltMaxAngleY={40}
             perspective={800}
             glareEnable={true}
             glareMaxOpacity={0.45}
             scale={1.02}
             gyroscope={true}
             style={{ height: 250, width: 250 }}
         >
             <img src={Fellowship} className="inner-element" alt="logo" width="150" height="auto" />
         </Tilt> */
        <Tilt
            className="parallax-effect-glare-scale br3 pt2 shadow-2 logo"
            perspective={100}
            glareEnable={true}
            glareMaxOpacity={0.65}
            scale={1.02}
            glarePosition="all"
        >
            <img src={Fellowship} className="inner-element tc " alt="pic" width="50" height="auto" />
        </Tilt>
    )
}
export default Logo;