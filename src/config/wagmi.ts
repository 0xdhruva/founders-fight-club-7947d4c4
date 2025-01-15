import { createConfig, http } from 'wagmi';
import { base } from 'wagmi/chains';
import { createWeb3Modal } from '@web3modal/wagmi';
import { supabase } from "@/integrations/supabase/client";

// Get the project key from Supabase
const { data: { value: projectId }, error } = await supabase
  .from('secrets')
  .select('value')
  .eq('name', 'REOWN_PROJECT_KEY')
  .single();

if (error) {
  console.error('Error fetching project key:', error);
}

// Wagmi config
export const config = createConfig({
  chains: [base],
  transports: {
    [base.id]: http(),
  },
});

// Create modal
export const modal = createWeb3Modal({
  wagmiConfig: config,
  projectId: projectId || '',
  chains: [base],
  themeMode: 'dark',
  themeVariables: {
    '--w3m-font-family': 'Bebas Neue, sans-serif',
    '--w3m-accent': '#8B0000',
    '--w3m-color-mix': '#8B0000',
    '--w3m-color-mix-strength': 30,
  },
});