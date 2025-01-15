import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { useToast } from "./ui/use-toast";
import { Wallet } from "lucide-react";

export default function WalletButton() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { toast } = useToast();

  const handleClick = async () => {
    if (isConnected) {
      disconnect();
      toast({
        title: "Wallet disconnected",
        description: "Your wallet has been disconnected successfully."
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full button-primary text-xl tracking-wider py-3 block text-center"
    >
      <Wallet className="inline-block mr-2" />
      {isConnected ? `${address?.slice(0, 6)}...${address?.slice(-4)}` : 'Connect Wallet'}
    </button>
  );
}