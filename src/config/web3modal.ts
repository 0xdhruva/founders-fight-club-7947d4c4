import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { base, baseSepolia } from 'viem/chains'
import { supabase } from '@/integrations/supabase/client'

const projectId = await supabase.functions.invoke('get-reown-key', {
  body: { key: 'REOWN_PROJECT_KEY' }
})

const metadata = {
  name: 'Founders Fight Club',
  description: 'Founders Fight Club Web3 Integration',
  url: 'https://foundersfightclub.xyz',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Only Base chains
const chains = [base, baseSepolia] as const
export const config = defaultWagmiConfig({ 
  chains, 
  projectId: projectId.data, 
  metadata 
})

createWeb3Modal({ wagmiConfig: config, projectId: projectId.data, chains })