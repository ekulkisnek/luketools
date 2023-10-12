import React from 'react';
import './HomeScreen.css';
import AppIcon from '../AppIcon/AppIcon';

function HomeScreen({ apps }) {
    return (
        <div className="HomeScreen">
            {apps.map(app => (
                <AppIcon
                    key={app.label}
                    icon={app.icon}
                    label={app.label}
                    color={app.color}
                    onClick={app.onClick}
                />
            ))}
        </div>
    );
}

export default HomeScreen;
