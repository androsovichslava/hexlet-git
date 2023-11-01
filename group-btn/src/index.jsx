// @ts-check

import ReactDOM from 'react-dom/client';
import React from 'react';

import BtnGroup from './BtnGroup.jsx';

const mountNode = document.getElementById('container');

if (mountNode !== null) {
    // Now you can safely use the element
    // ...
    const root = ReactDOM.createRoot(mountNode);
    root.render(<BtnGroup />);
} else {
    // Handle the case where the element is null
}
