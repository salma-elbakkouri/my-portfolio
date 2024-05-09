// AnimatedGrid.js
import React from 'react';
import '../global.css'; // Ensure Tailwind CSS is included

const AnimatedGrid = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="grid grid-cols-12 grid-rows-6 w-full h-full gap-1 opacity-10 animate-background-grid">
                {[...Array(72)].map((_, index) => (
                    <div key={index} className="bg-white/10"></div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedGrid;
