import './ParticlesJs.css'
import React, { useContext, useEffect } from 'react';
import { ThemeContext } from './them-context';

function BackgroundControl() {
    const { particalOptions, onCountChange, onSizeChange } = useContext(ThemeContext);
    let count = particalOptions.particles.number.value;
    let size = particalOptions.particles.size.value;

    useEffect(() => {
        const ele = document.querySelector('.buble');
        ele.style.left = `${Number(count / 10)}px`;
    }, [count])

    return (
        <div className="slidecontainer shown shadow-5 "
            style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div className='numberslide'>
                <input type="range" min="0" max="500" value={count}
                    className="slider" id="numRange" onInput={onCountChange} />
                <div className="buble">
                    {count}
                </div>
            </div>
            <div className='sizeslide'>
                <input type="range" min="0" max="10" value={size}
                    className="slider" id="sizeRange" onInput={onSizeChange} />
                <div className='white'>
                    S:{size}
                </div>
            </div>
        </div>
    )
}

export default BackgroundControl;