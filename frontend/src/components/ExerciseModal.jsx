// import React from "react";

// const ExerciseModal = ({ exercise, onClose }) => {
//   if (!exercise) return null;

//   return (
//     <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white rounded-lg shadow-xl w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
//         <button
//           className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl"
//           onClick={onClose}
//         >
//           ✕
//         </button>
//         <h2 className="text-2xl font-bold mb-2">{exercise.name}</h2>
//         <div className="mb-4">
//           {exercise.mediaUrl.endsWith(".mp4") ? (
//             <video
//               src={exercise.mediaUrl}
//               controls
//               className="w-full rounded"
//             />
//           ) : (
//             <img
//               src={exercise.mediaUrl}
//               alt={exercise.name}
//               className="w-full rounded"
//             />
//           )}
//         </div>
//         <p className="text-gray-700 mb-2">
//           <strong>Description:</strong> {exercise.description}
//         </p>
//         <p className="text-gray-700">
//           <strong>Benefits:</strong> {exercise.benefits}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ExerciseModal;


import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ExerciseList() {
  const [exercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/exercises").then((res) => {
      setExercises(res.data);
    });
  }, []);

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-6">
      {exercises.map((exercise) => (
        <div
          key={exercise._id}
          onClick={() => setSelectedExercise(exercise)}
          className="bg-white shadow-md rounded-md overflow-hidden cursor-pointer hover:scale-105 transition-transform"
        >
          <img src={exercise.imageUrl} alt={exercise.name} className="h-40 w-full object-cover" />
          <div className="p-3">
            <h3 className="font-bold">{exercise.name}</h3>
          </div>
        </div>
      ))}

      {/* Modal */}
      {selectedExercise && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-xl p-5 rounded-lg relative">
            <button
              onClick={() => setSelectedExercise(null)}
              className="absolute top-2 right-3 text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedExercise.name}</h2>
            <video
              src={selectedExercise.videoUrl}
              controls
              className="w-full max-h-64 object-contain mb-4"
            />
            <p className="text-gray-700">{selectedExercise.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
