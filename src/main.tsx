import { createRoot } from 'react-dom/client';
import { WagmiConfig } from 'wagmi';
import App from './App.tsx';
import './index.css';
import { config } from './lib/wagmi';

createRoot(document.getElementById("root")!).render(
  <WagmiConfig config={config}>
    <App />
  </WagmiConfig>
);