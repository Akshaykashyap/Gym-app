import React from 'react';

function Home() {
  return (
    <section className="text-center space-y-4 text-white">
      <h2 className="text-3xl font-bold text-blue-700">Welcome to Gym App</h2>
      <p>At The Gym app, we believe every rep brings you closer to a stronger, healthier you.<br></br> 
        Whether you're just starting out or leveling up, this is your space to push limits, crush goals, and transform both body and mind.</p>
        <ul className='space-y-4 text-center'>
         <li>💪 No excuses. Just results.</li> 
         <li>🔥 Consistency beats perfection.</li> 
         <li>🏆 Train hard, stay focused, and the results will follow.</li> 
         </ul>
          <p> Join a community that lifts each other up—because greatness is built, not given. </p>

      <img
        src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Gym"
        className="block size-full rounded-lg shadow-lg"
      />
    </section>
  );
}

export default Home;
