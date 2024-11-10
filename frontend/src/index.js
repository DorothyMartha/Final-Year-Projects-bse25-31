import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev";

// Import Faro
import { initializeFaro } from '@grafana/faro-react';
import { createReactRouterV6DataOptions, ReactIntegration, getWebInstrumentations } from '@grafana/faro-react';
import { matchRoutes } from 'react-router-dom';

// Initialize Faro with your settings
initializeFaro({
  url: 'https://faro-collector-prod-us-east-0.grafana.net/collect/04a869abb7b3854d3a2dea7bc3baa8b3', // Replace with your actual Grafana collector URL
  app: {
    name: 'task-management-app', // Your app's name for easy identification
  },
  instrumentations: [
    // Load default Web instrumentations
    ...getWebInstrumentations(),
    new ReactIntegration({
      router: createReactRouterV6DataOptions({ matchRoutes }),
    }),
  ],
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
      <App />
    </DevSupport>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

