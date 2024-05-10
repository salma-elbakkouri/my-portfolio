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
        const lightBackground = {
            value: 'url(src/assets/bg1.png)',
        };
        const darkBackground = {
            value: 'url(src/assets/bg2.jpg)',
        };

        return {
            background: {
                color: isDark ? darkBackground : lightBackground,
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
                    value: isDark ? '#FFFFFF' : '#404658',
                },
                links: {
                    color: isDark ? '#FFFFFF' : '#404658',
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
