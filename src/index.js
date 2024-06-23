import React from 'react';
import ReactDOM from 'react-dom/client'; // Import correct module
import App from './App';
import './styles.css';

const rootElement = document.getElementById('root'); // Ensure this matches your HTML
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(rootElement); // Use createRoot correctly
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
