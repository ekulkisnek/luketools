import React from 'react';
import './AppIcon.css';

function AppIcon({ icon, label, color, onClick }) {
    return (
        <div className="AppIcon" style={{ backgroundColor: color }} onClick={onClick}>
            <img src={icon} alt={label} />
            <span>{label}</span>
        </div>
    );
}

export default AppIcon;
