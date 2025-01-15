import { createRoot } from 'react-dom/client';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { mainnet } from '@coinbase/onchainkit/chains';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById("root")!).render(
  <OnchainKitProvider chain={mainnet}>
    <App />
  </OnchainKitProvider>
);