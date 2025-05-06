// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../public/logo.png';

// function Header() {
//   return (
//     <header className="bg-blue-700 text-white p-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//       <Link to="/">
//         <img src={logo} alt="Gym App Logo" className="h-10 cursor-pointer" />
//       </Link>
//         <nav className="space-x-4">
//           <Link to="/" className="hover:underline">Home</Link>
//           <Link to="/exercises" className="hover:underline">Exercises</Link>
//           <Link to="/diets" className="hover:underline">Diets</Link>
//           <Link to="/register" className="hover:underline">Register</Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;


import { Link } from "react-router-dom";
import logo from '../../public/logo-bg.png'; // adjust path

const Header = () => (
  <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="container mx-auto flex justify-between items-center">
       <Link to="/">
         <img src={logo} alt="Gym App Logo" className="size-20 max-h-96 cursor-pointer" />
       </Link>
         <nav className="space-x-12">
           <Link to="/" className="hover:underline">Home</Link>
           <Link to="/exercises" className="hover:underline">Exercises</Link>
           <Link to="/diets" className="hover:underline">Diets</Link>
           <Link to="/register" className="hover:underline">Register</Link>
         </nav>
       </div>
  </header>
);

export default Header;
