import { useState } from 'react';
import { X } from 'lucide-react';

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (code: string) => void;
}

const ReferralModal = ({ isOpen, onClose, onSubmit }: ReferralModalProps) => {
  const [code, setCode] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-ffc-darkgray p-8 rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-ffc-white/60 hover:text-ffc-white transition-colors"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold text-ffc-white mb-6">Enter Referral Code</h2>
        
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your secret code"
          className="w-full bg-ffc-black/50 border border-ffc-steel/30 rounded-md px-4 py-3 text-ffc-white
            placeholder:text-ffc-white/30 focus:outline-none focus:border-ffc-red/50 transition-colors mb-6"
        />

        <button
          onClick={() => onSubmit(code)}
          className="button-primary w-full"
        >
          Join the Club
        </button>
      </div>
    </div>
  );
};

export default ReferralModal;