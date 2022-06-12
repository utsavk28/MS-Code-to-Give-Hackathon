import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom"; 
import './index.css';
import App from './App';
import { Login } from './components/Login';
import { AppyAID } from './components/AppyAID';
import { ProfilePageFinancial } from './components/ProfilePageFinancial';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(   
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="Login" element={<Login />} />
            <Route path="ApplyAID" element={<AppyAID />} />
            <Route path="ProfilePageFinancial" element={<ProfilePageFinancial />} />
        </Routes>
        {/* <App/> */}
    </BrowserRouter> 
);