import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';

const getWrapper = (): HTMLElement => {
    const root = document.getElementById('root');
    if (root) return root;
    const alternativeRoot = document.createElement('div');
    document.body.appendChild(alternativeRoot);
    return alternativeRoot;
};

const wrapper = getWrapper();
const root = createRoot(wrapper);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
