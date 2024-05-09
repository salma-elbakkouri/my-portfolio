// src/App.js
import React from 'react';
import Menu from './components/menu';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import BackgroundParticles from './components/BackgroundParticles';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
    return (
        <div className="relative min-h-screen overflow-hidden light dark:bg-dark-gradient bg-light-gradient">
            <BackgroundParticles />
            <div className="relative z-10">
                <Menu />
                <ThemeSwitcher />
                <Home />
                <About />
                <Services />
            </div>
        </div>
    );
}

export default App;
