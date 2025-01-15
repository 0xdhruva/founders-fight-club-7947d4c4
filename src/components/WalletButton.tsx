import { useModal } from "connectkit";
import { useAccount } from "wagmi";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

export default function WalletButton() {
  const { address, isConnected } = useAccount();
  const { setOpen } = useModal();
  const { toast } = useToast();

  const handleClick = () => {
    if (isConnected) {
      setOpen(false);
      toast({
        title: "Wallet disconnected",
        description: "Your wallet has been disconnected successfully."
      });
    } else {
      setOpen(true);
    }
  };

  return (
    <Button 
      onClick={handleClick}
      className="bg-ffc-red hover:bg-ffc-red/90 text-white"
    >
      {isConnected ? `${address?.slice(0, 6)}...${address?.slice(-4)}` : 'Connect Wallet'}
    </Button>
  );
}