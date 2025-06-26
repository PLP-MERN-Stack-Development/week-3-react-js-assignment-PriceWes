import React from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => (
  <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
    <div className="font-bold text-lg">MyApp</div>
    <div className="flex items-center gap-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/tasks" className="hover:underline">Tasks</Link>
      <ThemeSwitcher />
    </div>
  </nav>
);

export default Navbar;