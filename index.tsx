import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log("System: Starting React App Mount...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("System Error: Root element not found");
  throw new Error("Could not find root element to mount to");
}

try {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("System: React App Render Initiated.");
} catch (error) {
  console.error("System Critical: React failed to mount.", error);
  // Manual fallback if React fails completely
  rootElement.innerHTML = `<div style="padding: 20px; color: red;"><h1>Failed to Start App</h1><p>${error instanceof Error ? error.message : String(error)}</p></div>`;
}