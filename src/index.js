import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import OrgLandingPage from './OrgLandingPage';
import APIListingPage from './APIListingPage';
import APILandingPage from './APILandingPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/:orgName" element={<OrgLandingPage />} />
    <Route path="/:orgName/APIListingPage" element={<APIListingPage />} />
    <Route path="/:orgName/APILandingPage/:apiId" element={<APILandingPage />} />
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
