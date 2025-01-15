import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { base, baseSepolia } from 'viem/chains'

// Only Base chains
const chains = [base, baseSepolia] as const

// Hardcode the project ID for now since we're only using public chains
const projectId = 'YOUR_PROJECT_ID' // This should be replaced with your actual project ID

const metadata = {
  name: 'Founders Fight Club',
  description: 'Founders Fight Club Web3 Integration',
  url: 'https://foundersfightclub.xyz',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

export const config = defaultWagmiConfig({ 
  chains, 
  projectId, 
  metadata 
})

createWeb3Modal({ wagmiConfig: config, projectId, chains })