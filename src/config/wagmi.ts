import { createConfig, http } from 'wagmi';
import { base } from 'wagmi/chains';
import { createWeb3Modal } from '@web3modal/wagmi';

// Since this is a public key, it's fine to store it directly in the code
const PROJECT_ID = 'YOUR_PROJECT_ID';

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

// Export for use in other files
export { PROJECT_ID };