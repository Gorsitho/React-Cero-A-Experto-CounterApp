

import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './HelloWorldApp';
import {FirstApp} from './FirstApp'
import './styles.css'; // Global Styles 


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
        <FirstApp title="Hola, mi nombre es ...." subTitle={25}/>
    </React.StrictMode>
);