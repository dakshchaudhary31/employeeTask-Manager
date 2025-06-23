import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const NewTask = ({ data, onAccept }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-yellow-100 border border-yellow-300 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-center text-xs">
        <span className="bg-yellow-300 text-yellow-900 font-medium px-3 py-1 rounded-full">
          {data.category}
        </span>
        <span className="text-gray-500">{data.taskDate}</span>
      </div>

      {/* Title */}
      <h2 className="mt-5 text-xl font-bold text-yellow-900">{data.taskTitle}</h2>

      {/* Description */}
      <p className="text-sm mt-3 text-gray-700 leading-5">{data.taskDescription}</p>

      {/* Accept Button */}
      <div className="mt-6">
        <button
          onClick={() => onAccept?.(data.id)}
          className="flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400 text-yellow-900 font-medium px-4 py-2 rounded-lg text-sm transition duration-200"
        >
          <FaPlusCircle /> Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
