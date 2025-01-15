import { createConfig, http } from 'wagmi';
import { base } from 'wagmi/chains';
import { createWeb3Modal } from '@web3modal/wagmi';

// Replace YOUR_ACTUAL_PROJECT_ID with the ID you copied from WalletConnect Cloud
const PROJECT_ID = 'YOUR_ACTUAL_PROJECT_ID';

// Wagmi config
export const config = createConfig({
  chains: [base],
  transports: {
    [base.id]: http(),
  },
});

// Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId: PROJECT_ID,
  defaultChain: base,
  themeMode: 'dark',
  themeVariables: {
    '--w3m-font-family': 'Bebas Neue, sans-serif',
    '--w3m-accent': '#8B0000',
    '--w3m-color-mix': '#8B0000',
    '--w3m-color-mix-strength': 30,
  },
});

export { PROJECT_ID };