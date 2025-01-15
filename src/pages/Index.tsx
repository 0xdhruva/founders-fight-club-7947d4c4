import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === 'fight') {
      // TODO: Implement successful authentication logic
      toast({
        title: "Welcome to Founders Fight Club",
        description: "You have proven yourself worthy.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Access Denied",
        description: "You are not worthy.",
      });
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-ffc-black text-ffc-white font-['Bebas_Neue']">
      <Navbar />
      <ParticleBackground />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Rules Section */}
          <div className="space-y-6 mb-16">
            <p className="text-2xl md:text-3xl text-ffc-white/90 tracking-wider">
              1. You do not talk about Founders Fight Club
            </p>
            <p className="text-2xl md:text-3xl text-ffc-white/90 tracking-wider">
              2. You DO NOT talk about Founders Fight Club
            </p>
            <p className="text-2xl md:text-3xl text-ffc-white/90 tracking-wider">
              3. Put your money where your mouth is
            </p>
            <p className="text-2xl md:text-3xl text-ffc-white/90 tracking-wider">
              4. Submit three proofs of workouts every week
            </p>
            <p className="text-2xl md:text-3xl text-ffc-white/90 tracking-wider">
              5. If you fail, you're out
            </p>
            <p className="text-2xl md:text-3xl text-ffc-white/90 tracking-wider">
              6. One week at a time
            </p>
          </div>

          {/* Password Form */}
          <form onSubmit={handlePasswordSubmit} className="mt-12 space-y-6">
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password please"
                className="w-full bg-transparent border-b-2 border-ffc-steel/30 px-4 py-3 text-2xl tracking-wider
                          focus:outline-none focus:border-ffc-red/50 transition-colors
                          placeholder:text-ffc-steel/50"
              />
            </div>
            <button
              type="submit"
              className="w-full button-primary text-2xl tracking-wider py-4"
            >
              Enter
            </button>
          </form>

          <p className="mt-12 text-xl md:text-2xl text-ffc-white/60 tracking-wider text-center italic">
            "Better to be a Warrior in a Garden than a Gardener in a War"
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;