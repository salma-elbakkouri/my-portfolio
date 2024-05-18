import React from 'react';
import Menu from './components/menu';
import Home from './components/home';
import About from './components/about';
import BackgroundParticles from './components/BackgroundParticles';
import ThemeSwitcher from './components/ThemeSwitcher';
import Projects from './components/projects';
import Skills from './components/skills';
import Experience from './components/experience';
import '@aeternity/aepp-components/dist/common.css';
import Footer from './components/footer';


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
                <Skills/>
                <Experience/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
