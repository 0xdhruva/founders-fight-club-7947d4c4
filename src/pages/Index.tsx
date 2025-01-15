import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import ReferralModal from '../components/ReferralModal';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReferralSubmit = (code: string) => {
    console.log('Referral code submitted:', code);
    // TODO: Implement referral code verification
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-ffc-black text-ffc-white">
      <Navbar />
      <ParticleBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-float text-glow">
            Founders Fight Club
          </h1>
          <p className="text-xl md:text-2xl text-ffc-white/80 max-w-2xl mx-auto mb-12">
            "Better to be a Warrior in a Garden than a Gardener in a War"
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="button-primary group"
          >
            Join the Club
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-ffc-black to-ffc-darkgray">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-ffc-black/50 backdrop-blur-sm border border-ffc-steel/20 card-hover">
            <h3 className="text-xl font-bold mb-4">Weekly Challenges</h3>
            <p className="text-ffc-white/70">
              Prove your commitment with weekly workout submissions and stay accountable.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-ffc-black/50 backdrop-blur-sm border border-ffc-steel/20 card-hover">
            <h3 className="text-xl font-bold mb-4">Exclusive Community</h3>
            <p className="text-ffc-white/70">
              Connect with like-minded founders committed to physical excellence.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-ffc-black/50 backdrop-blur-sm border border-ffc-steel/20 card-hover">
            <h3 className="text-xl font-bold mb-4">High Stakes</h3>
            <p className="text-ffc-white/70">
              Put your money where your mouth is. Stake to join, perform to stay.
            </p>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">The Rules</h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-ffc-white/80">1. You do not talk about Founders Fight Club.</p>
            <p className="text-ffc-white/80">2. You DO NOT talk about Founders Fight Club.</p>
            <p className="text-ffc-white/80">3. Submit three proofs of workout every week.</p>
            <p className="text-ffc-white/80">4. If you fail, you're out.</p>
            <p className="text-ffc-white/80">5. One fight at a time.</p>
          </div>
        </div>
      </section>

      <ReferralModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleReferralSubmit}
      />
    </div>
  );
};

export default Index;