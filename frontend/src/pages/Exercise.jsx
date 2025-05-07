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
//     <div
//       className="bg-cover bg-center min-h-screen p-8"
//       style={{ backgroundImage: 'url("/exercise-bg.jpg")' }}
//     >
//       <h1 className="text-4xl text-white font-bold mb-6 text-center">All Gym Exercises</h1>
//       <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
//         {exercises.map((exercise) => (
//           <div key={exercise._id} className="card bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-500 hover:shadow-lg  hover:-translate-y-2">
//             <img
//               src={`http://localhost:5000/${exercise.imageUrl}`}
//               alt={exercise.name}
//               className="w-full h-96 object-cover"
//             />
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
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/api/exercises")
      .then(res => setExercises(res.data))
      .catch(err => console.error("Error fetching exercises:", err));
  }, []);

  const openModal = (exercise) => {
    setSelectedExercise(exercise);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedExercise(null);
    setIsModalOpen(false);
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen p-8"
      style={{ backgroundImage: 'url("/exercise-bg.jpg")' }}
    >
      <h1 className="text-4xl text-white font-bold mb-6 text-center">All Gym Exercises</h1>
      
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {exercises.map((exercise) => (
          <div
            key={exercise._id}
            onClick={() => openModal(exercise)}
            className="cursor-pointer card bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-500 hover:shadow-lg hover:-translate-y-2"
          >
            <img
              src={`http://localhost:5000/${exercise.imageUrl}`}
              alt={exercise.name}
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{exercise.name}</h2>
              <p className="text-gray-700 text-sm line-clamp-3">{exercise.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedExercise && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-6 w-[90%] max-w-2xl relative">
      <button
        onClick={closeModal}
        className="absolute top-3 right-4 text-gray-600 hover:text-black text-xl"
      >
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-4">{selectedExercise.name}</h2>

      <div className="w-full h-[300px] mb-4">
        {selectedExercise.videoUrl ? (
          <video
            controls
            className="w-full h-full object-contain rounded"
            src={`http://localhost:5000/${selectedExercise.videoUrl}`}
          />
        ) : (
          <p className="text-red-500">No video available</p>
        )}
      </div>

      <div className="text-gray-800 text-md space-y-2">
        <p><strong>Description:</strong> {selectedExercise.description}</p>
        {selectedExercise.uses && <p><strong>Uses:</strong> {selectedExercise.uses}</p>}
        {selectedExercise.benefits && <p><strong>Benefits:</strong> {selectedExercise.benefits}</p>}
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default Exercises;
