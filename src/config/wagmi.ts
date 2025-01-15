import { createConfig, http } from 'wagmi';
import { base } from 'wagmi/chains';
import { createWeb3Modal } from '@web3modal/wagmi';
import { supabase } from "@/integrations/supabase/client";

// Initialize with empty project ID
let projectId = '';

// Function to initialize Web3Modal
const initializeWeb3Modal = async () => {
  try {
    const { data, error } = await supabase
      .from('secrets')
      .select('value')
      .eq('name', 'REOWN_PROJECT_KEY')
      .single();

    if (error) {
      console.error('Error fetching project key:', error);
      return;
    }

    projectId = data?.value || '';

    // Create modal with retrieved project ID
    createWeb3Modal({
      wagmiConfig: config,
      projectId,
      defaultChain: base,
      themeMode: 'dark',
      themeVariables: {
        '--w3m-font-family': 'Bebas Neue, sans-serif',
        '--w3m-accent': '#8B0000',
        '--w3m-color-mix': '#8B0000',
        '--w3m-color-mix-strength': 30,
      },
    });
  } catch (err) {
    console.error('Failed to initialize Web3Modal:', err);
  }
};

// Wagmi config
export const config = createConfig({
  chains: [base],
  transports: {
    [base.id]: http(),
  },
});

// Initialize Web3Modal
initializeWeb3Modal();

// Export for use in other files
export { projectId };