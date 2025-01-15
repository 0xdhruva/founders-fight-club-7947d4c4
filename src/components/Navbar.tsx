import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-ffc-black/90 backdrop-blur-md z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-ffc-white">
          FFC
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-ffc-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-ffc-black/95 backdrop-blur-md md:hidden">
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/dashboard" className="nav-link" onClick={() => setIsOpen(false)}>Dashboard</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;