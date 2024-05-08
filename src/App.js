import React from 'react';
import Menu from './components/menu';
import Home from './components/home';
import Particles from 'react-tsparticles';

function App() {
    return (
        <div>
            <div>
                <Menu />
            </div>
            <div>
                <Home />
            </div>
        </div>


    );
}

export default App;
