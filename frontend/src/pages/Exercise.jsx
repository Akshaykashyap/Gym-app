// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Exercises = () => {
//   const [exercises, setExercises] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/exercises")
//       .then(res => setExercises(res.data))
//       .catch(err => console.error("Error fetching exercises:", err));
//   }, []);

//   return (
//     <div className="bg-cover bg-center min-h-screen p-8" style={{ backgroundImage: 'url("/exercise-bg.jpg")' }}>
//       <h1 className="text-4xl text-white font-bold mb-6 text-center">All Gym Exercises</h1>
//       <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
//         {exercises.map((exercise) => (
//           <div key={exercise._id} className="bg-white rounded-xl shadow-md overflow-hidden">
//             <img src={`http://localhost:5000/${exercise.imageUrl}`} alt={exercise.name} className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">{exercise.name}</h2>
//               <p className="text-gray-700 text-sm">{exercise.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Exercises;


import React, { useEffect, useState } from "react";
import axios from "axios";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/exercises")
      .then(res => setExercises(res.data))
      .catch(err => console.error("Error fetching exercises:", err));
  }, []);

  return (
    <div
      className="bg-cover bg-center min-h-screen p-8"
      style={{ backgroundImage: 'url("/exercise-bg.jpg")' }}
    >
      <h1 className="text-4xl text-white font-bold mb-6 text-center">All Gym Exercises</h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {exercises.map((exercise) => (
          <div key={exercise._id} className="card bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-500 hover:shadow-lg  hover:-translate-y-2">
            <img
              src={`http://localhost:5000/${exercise.imageUrl}`}
              alt={exercise.name}
              className="w-full h-96 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{exercise.name}</h2>
              <p className="text-gray-700 text-sm">{exercise.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
