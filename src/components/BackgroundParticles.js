import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const BackgroundParticles = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log('Particles loaded:', container);
    };

    const options = {
        background: {
            color: { value: 'url(src/assets/bg1.png)' },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: 'push',
                },
                onHover: {
                    enable: true,
                    mode: 'repulse',
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: '#FFFFFF',
            },
            links: {
                color: '#FFFFFF',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: {
                    default: 'bounce',
                },
                speed: 1,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 20,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: 'circle',
            },
            size: {
                random: true,
                value: 5,
            },
        },
        detectRetina: true,
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
        />
    );
};

export default BackgroundParticles;
