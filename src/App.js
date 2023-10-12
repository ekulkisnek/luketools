import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import HomeScreen from './components/HomeScreen/HomeScreen';
import App1 from './views/App1/App1';
import App2 from './views/App2/App2';

const colors = [
    '#FF5733', '#33FF57', '#5733FF',
    '#FF33A6', '#33A6FF', '#A633FF',
    '#FF8C33', '#33FF8C', '#8C33FF'
    // ... add more colors as needed
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(colors);


const appsData = [
    { label: 'App1', icon: 'path-to-app1-icon.png', color: colors[0], onClick: () => window.location.href = '/app1' },
    { label: 'App2', icon: 'path-to-app2-icon.png', color: colors[1], onClick: () => window.location.href = '/app2' },
    // ... more apps
];


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/app1" element={<App1 />} />
                <Route path="/app2" element={<App2 />} />
                <Route path="/" element={<HomeScreen apps={appsData} />} />
            </Routes>
        </Router>
    );
}

export default App;
