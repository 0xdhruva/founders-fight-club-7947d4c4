import { useState } from 'react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { useAccount, useConnect } from 'wagmi';
import { injected } from 'wagmi/connectors';

interface OnboardingStepsProps {
  projectId: string;
}

const OnboardingSteps = ({ projectId }: OnboardingStepsProps) => {
  const [walletConnected, setWalletConnected] = useState(false);
  const { toast } = useToast();
  const { address } = useAccount();
  const { connectAsync } = useConnect();

  const handleWalletConnect = async () => {
    try {
      await connectAsync({ connector: injected() });
      setWalletConnected(true);
      toast({
        title: "Success",
        description: "Wallet connected successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to connect wallet",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-4xl md:text-5xl text-ffc-white tracking-wider mb-8">
        Welcome to Founders Fight Club
      </h2>
      
      {/* Step 1: Connect Wallet */}
      <div className="space-y-4">
        <h3 className="text-2xl md:text-3xl text-ffc-white/90 tracking-wider">
          Step 1: Connect Wallet
        </h3>
        <Button 
          onClick={handleWalletConnect}
          className="w-full text-xl tracking-wider py-3"
          disabled={walletConnected}
        >
          {walletConnected ? `Connected: ${address?.slice(0, 6)}...${address?.slice(-4)}` : 'Connect Wallet'}
        </Button>
      </div>

      {/* Step 2: Join Telegram */}
      <div className="space-y-4">
        <h3 className="text-2xl md:text-3xl text-ffc-white/90 tracking-wider">
          Step 2: Join Private Group
        </h3>
        <a
          href="https://t.me/+K74j-Q0Gwkw5NmI1"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full button-primary text-xl tracking-wider py-3 block text-center
            ${!walletConnected ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
        >
          Join Telegram Group
        </a>
      </div>
    </div>
  );
};

export default OnboardingSteps;