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
        projectId: process.env.VITE_WALLET_CONNECT_PROJECT_ID || '',
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});