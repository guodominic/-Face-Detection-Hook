import { useContext } from 'react';
import { Particles } from '@blackbox-vision/react-particles';
import './ParticlesJs.css'
import { ThemeContext } from './them-context';

const ParticlesJs = () => {

    const { particalOptions } = useContext(ThemeContext);


    return (
        <Particles
            id="simple"
            width="auto"
            height="100vh"
            className='particles gradient'
            params={particalOptions}
        />
    );
};
export default ParticlesJs;