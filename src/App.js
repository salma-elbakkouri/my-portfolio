import React from 'react';
import Menu from './components/menu';
import Home from './components/home';
import About from './components/about';
import BackgroundParticles from './components/BackgroundParticles';
import ThemeSwitcher from './components/ThemeSwitcher';
import Projects from './components/projects';

function App() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <BackgroundParticles />
            <div className="relative z-10">
                <Menu />
                <ThemeSwitcher />
                <Home />
                <About />
                <Projects/>
                {/* <Services /> */}
            </div>
        </div>
    );
}

export default App;
