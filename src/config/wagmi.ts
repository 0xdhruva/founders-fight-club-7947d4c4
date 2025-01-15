import { createConfig, http } from 'wagmi';
import { base } from 'wagmi/chains';
import { createWeb3Modal } from '@web3modal/wagmi';

// Get the project ID from Supabase secrets
const PROJECT_ID = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

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