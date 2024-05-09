// src/components/BackgroundParticles.js
import React, { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const BackgroundParticles = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };

        checkTheme();
        window.addEventListener('themeChange', checkTheme);

        return () => window.removeEventListener('themeChange', checkTheme);
    }, []);

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log('Particles loaded:', container);
    };

    const getThemeBasedOptions = (isDark) => {
        // Define the gradients for dark and light modes
        const darkBackground = 'linear-gradient(180deg, #f0f4ff, #000000)';
        const lightBackground = 'linear-gradient(180deg, #f0f4ff, #404658)';
        const darkParticleGradient = [
            { stop: 0, color: '#f0f4ff' },
            { stop: 1, color: '#000000' },
        ];
        const lightParticleGradient = [
            { stop: 0, color: '#f0f4ff' },
            { stop: 1, color: '#404658' },
        ];

        return {
            background: {
                color: {
                    value: isDark ? darkBackground : lightBackground,
                },
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
                    value: isDark ? '#f0f4ff' : '#404658',
                },
                links: {
                    color: isDark ? '#f0f4ff' : '#404658',
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
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={getThemeBasedOptions(isDark)}
        />
    );
};

export default BackgroundParticles;
