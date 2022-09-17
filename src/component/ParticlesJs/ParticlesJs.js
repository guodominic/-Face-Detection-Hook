import React from 'react';
import { Particles } from '@blackbox-vision/react-particles';
import './ParticlesJs.css'

const ParticlesJs = () => (
    <Particles
        id="simple"
        width="auto"
        height="100vh"
        className='particles gradient'
        /*         style={{
                    backgroundColor: 'grey',
                }} */
        params={{
            particles: {
                number: {
                    value: 250,
                },
                size: {
                    value: 1,
                },
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse',
                    },
                },
            },
        }}
    />
);
export default ParticlesJs;