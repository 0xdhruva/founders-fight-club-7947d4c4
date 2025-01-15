import { getDefaultConfig } from "connectkit";
import { createConfig } from "wagmi";
import { base, baseSepolia } from "viem/chains";

export const config = createConfig(
  getDefaultConfig({
    chains: [base, baseSepolia],
    walletConnectProjectId: "YOUR_PROJECT_ID", // Replace with your WalletConnect project ID
    appName: "Founders Fight Club",
  })
);