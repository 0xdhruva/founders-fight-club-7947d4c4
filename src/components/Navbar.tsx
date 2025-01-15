import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-ffc-black/90 backdrop-blur-md z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-ffc-white">
          FFC
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;