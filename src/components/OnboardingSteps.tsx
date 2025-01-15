import { useState } from 'react';
import { Button } from './ui/button';
import { WalletKit } from '@reown/walletkit';

interface OnboardingStepsProps {
  projectId: string;
}

const OnboardingSteps = ({ projectId }: OnboardingStepsProps) => {
  const [step1Complete, setStep1Complete] = useState(false);

  const handleWalletConnect = async () => {
    try {
      const walletKit = new WalletKit({
        projectId,
      });
      await walletKit.connect();
      setStep1Complete(true);
      console.log('Wallet connected successfully');
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-4xl md:text-5xl text-ffc-white tracking-wider mb-8">
        Welcome to Founders Fight Club
      </h2>
      
      {/* Step 1 */}
      <div className="space-y-4">
        <h3 className="text-2xl md:text-3xl text-ffc-white/90 tracking-wider">
          Step 1: Stake $100 USDC
        </h3>
        <Button
          onClick={handleWalletConnect}
          className="w-full text-xl tracking-wider py-3"
          disabled={step1Complete}
        >
          {step1Complete ? 'Wallet Connected' : 'Connect Wallet'}
        </Button>
      </div>

      {/* Step 2 */}
      <div className="space-y-4">
        <h3 className="text-2xl md:text-3xl text-ffc-white/90 tracking-wider">
          Step 2: Join Private Group
        </h3>
        <a
          href="https://t.me/+K74j-Q0Gwkw5NmI1"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full button-primary text-xl tracking-wider py-3 block text-center
            ${!step1Complete ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
        >
          Join Telegram Group
        </a>
      </div>
    </div>
  );
};

export default OnboardingSteps;