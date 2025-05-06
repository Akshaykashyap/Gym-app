// import React from 'react';

// function Home() {
//   return (
//     <section className="text-center space-y-4 text-white">
//       <h2 className="text-3xl font-bold text-blue-700">Welcome to Gym App</h2>
//       <p>At The Gym app, we believe every rep brings you closer to a stronger, healthier you.<br></br> 
//         Whether you're just starting out or leveling up, this is your space to push limits, crush goals, and transform both body and mind.</p>
//         <ul className='space-y-4 text-center'>
//          <li>💪 No excuses. Just results.</li> 
//          <li>🔥 Consistency beats perfection.</li> 
//          <li>🏆 Train hard, stay focused, and the results will follow.</li> 
//          </ul>
//           <p> Join a community that lifts each other up—because greatness is built, not given. </p>

//       <img
//         src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//         alt="Gym"
//         className="block size-full rounded-lg shadow-lg"
//       />
//     </section>
//   );
// }

// export default Home;


  // src/pages/Home.jsx
import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-[90vh] flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/bg-gym.jpg')" }} // place this image in `public/`
      >
        <div className="bg-black bg-opacity-70 p-8 rounded-xl text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Fitness First Gym
          </h1>
          <p className="text-lg mb-6">
            Your ultimate destination for fitness, strength, and a better you.
          </p>
          <Link to="/exercises">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full transition">
              Explore Exercises
            </button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Why Join Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Certified Trainers", desc: "Professional support and expert knowledge.", emoji: "💪" },
            { title: "Tailored Diet Plans", desc: "Veg & Non-Veg customized nutrition.", emoji: "🥗" },
            { title: "Modern Equipment", desc: "Top-class machines & workout gear.", emoji: "🏋️‍♂️" },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 text-white py-12 text-center">
        <h3 className="text-2xl font-semibold mb-4">Start Your Fitness Journey Today</h3>
        <p className="mb-6">Join Fitness First Gym and take the first step toward a healthier life.</p>
        <Link to="/register">
          <button className="bg-white text-red-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition">
            Join Now
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
