import { useState } from 'react';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [step1Complete, setStep1Complete] = useState(false);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === 'fight') {
      setError('');
      setSuccess(true);
    } else {
      setError('You are not worthy.');
      setPassword('');
    }
  };

  const handleWalletConnect = async () => {
    console.log('Connecting wallet...');
    setStep1Complete(true);
  };

  return (
    <div className="min-h-screen bg-ffc-black text-ffc-white font-['Bebas_Neue']">
      <Navbar />
      <ParticleBackground />

      <section className="min-h-screen pt-20 pb-8 px-4 md:px-6 flex items-center">
        <div className="max-w-3xl mx-auto w-full">
          {!success ? (
            <>
              {/* Rules Section */}
              <div className="space-y-4 md:space-y-6 mb-8 md:mb-16">
                <p className="text-xl md:text-3xl text-ffc-white/90 tracking-wider">
                  1. You do not talk about Founders Fight Club
                </p>
                <p className="text-xl md:text-3xl text-ffc-white/90 tracking-wider">
                  2. You DO NOT talk about Founders Fight Club
                </p>
                <p className="text-xl md:text-3xl text-ffc-white/90 tracking-wider">
                  3. Put your money where your mouth is
                </p>
                <p className="text-xl md:text-3xl text-ffc-white/90 tracking-wider">
                  4. Submit three proofs of workouts every week
                </p>
                <p className="text-xl md:text-3xl text-ffc-white/90 tracking-wider">
                  5. Tapping out is Ok, Quitting is not
                </p>
                <p className="text-xl md:text-3xl text-ffc-white/90 tracking-wider">
                  6. One week at a time
                </p>
              </div>

              {/* Password Form */}
              <form onSubmit={handlePasswordSubmit} className="mt-8 space-y-6">
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password please"
                    className="w-full bg-transparent border-b-2 border-ffc-steel/30 px-4 py-3 text-xl md:text-2xl tracking-wider
                              focus:outline-none focus:border-ffc-red/50 transition-colors
                              placeholder:text-ffc-steel/50"
                  />
                </div>
                {error && (
                  <p className="text-ffc-red text-lg md:text-xl tracking-wider">{error}</p>
                )}
                <button
                  type="submit"
                  className="w-full button-primary text-xl md:text-2xl tracking-wider py-3 md:py-4"
                >
                  Enter
                </button>
              </form>
            </>
          ) : (
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl text-ffc-white tracking-wider mb-8">
                Welcome to Founders Fight Club
              </h2>
              
              {/* Step 1 */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl text-ffc-white/90 tracking-wider">
                  Step 1: Stake $100 USDC
                </h3>
                <button
                  onClick={handleWalletConnect}
                  className="w-full button-primary text-xl tracking-wider py-3"
                  disabled={step1Complete}
                >
                  {step1Complete ? 'Wallet Connected' : 'Connect Wallet'}
                </button>
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
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
