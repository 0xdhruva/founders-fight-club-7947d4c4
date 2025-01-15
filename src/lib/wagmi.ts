import { configureChains, createConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

// Default project ID for development - replace with your actual project ID in production
const DEFAULT_PROJECT_ID = '3c7b1445c9c2d7ba9e6945a6f9d2b8e6';

export const config = createConfig({
  autoConnect: true,
  connectors: [
    new InjectedConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'Founders Fight Club',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID || DEFAULT_PROJECT_ID,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});
