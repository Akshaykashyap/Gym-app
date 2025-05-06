import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">🏋️ Gym App</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/exercises" className="hover:underline">Exercises</Link>
          <Link to="/diets" className="hover:underline">Diets</Link>
          <Link to="/register" className="hover:underline">Register</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
