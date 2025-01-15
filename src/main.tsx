import { createRoot } from 'react-dom/client';
import { OnchainProvider } from '@coinbase/onchainkit';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById("root")!).render(
  <OnchainProvider>
    <App />
  </OnchainProvider>
);