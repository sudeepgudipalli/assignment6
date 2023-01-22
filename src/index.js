import React from 'react';
import ReactDOM from 'react-dom/client';
import Table from './Table';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <center><h1 className="display-4">Reading From JSON</h1></center>
    <Table/>
  </React.StrictMode>
);

