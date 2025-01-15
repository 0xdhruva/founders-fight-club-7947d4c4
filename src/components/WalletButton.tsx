import { Button } from "./ui/button";
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { useToast } from "./ui/use-toast";
import { Wallet } from "lucide-react";

export default function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { toast } = useToast();

  const handleClick = async () => {
    if (isConnected) {
      disconnect();
      toast({
        title: "Wallet disconnected",
        description: "Your wallet has been disconnected successfully."
      });
    } else {
      const connector = connectors[0]; // injected connector (MetaMask)
      try {
        connect({ connector });
      } catch (error) {
        toast({
          title: "Connection Error",
          description: "Failed to connect wallet. Please try again.",
          variant: "destructive"
        });
      }
    }
  };

  return (
    <Button 
      onClick={handleClick}
      className="bg-ffc-red hover:bg-ffc-red/90 text-white"
    >
      <Wallet className="mr-2" />
      {isConnected ? `${address?.slice(0, 6)}...${address?.slice(-4)}` : 'Connect Wallet'}
    </Button>
  );
}