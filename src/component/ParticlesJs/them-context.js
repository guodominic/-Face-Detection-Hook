import { useState, createContext } from "react";

const ThemeContext = createContext(null);
const ThemeProvider = ({ children }) => {
    /*     const [count, setCount] = useState(100);
        const [size, setSize] = useState(5);
    
        const onCountChange = (e) => {
            setCount(e.target.value)
        }
        const onSizeChange = (e) => {
            setSize(e.target.value);
        } */

    const [particalOptions, setParticleOptions] = useState({
        particles: {
            number: {
                value: 145,
            },
            size: {
                value: 6,
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse',
                },
            },
        }
    })

    const onCountChange = (e) => {
        setParticleOptions({
            particles: {
                number: {
                    value: e.target.value,
                },
                size: {
                    value: particalOptions.particles.size.value,
                }
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse',
                    },
                },
            }
        })
    }
    const onSizeChange = (e) => {
        setParticleOptions({
            particles: {
                number: {
                    value: particalOptions.particles.number.value,
                },
                size: {
                    value: e.target.value,
                }
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse',
                    },
                },
            }
        })
    }
    return (
        <ThemeContext.Provider value={{ particalOptions, onCountChange, onSizeChange }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext };