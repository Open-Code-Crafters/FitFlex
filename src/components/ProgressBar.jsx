import React, { useEffect, useState } from 'react';
import '../styles/ProgressBar.css';

const ProgressBar = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    const updateProgressBar = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollProgress = (scrollTop / scrollHeight) * 100;
        setScrollPercent(scrollProgress);
    };

    useEffect(() => {
        window.addEventListener('scroll', updateProgressBar);
        return () => window.removeEventListener('scroll', updateProgressBar);
    }, []);

    return (
        <div id="progressBarContainer">
            <div id="progressBar" style={{ width: `${scrollPercent}%` }}></div>
        </div>
    );
};

export default ProgressBar;