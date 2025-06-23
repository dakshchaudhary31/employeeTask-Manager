import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-green-50 border border-green-200 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-center text-xs">
        <span className="bg-green-200 text-green-800 font-medium px-3 py-1 rounded-full">
          {data.category}
        </span>
        <span className="text-gray-500">{data.taskDate}</span>
      </div>

      {/* Title */}
      <h2 className="mt-5 text-xl font-bold text-green-900">{data.taskTitle}</h2>

      {/* Description */}
      <p className="text-sm mt-3 text-gray-700 leading-5">{data.taskDescription}</p>

      {/* Completed Button (Disabled) */}
      <div className="mt-5">
        <button
          disabled
          className="w-full flex items-center justify-center gap-2 bg-green-100 text-green-700 border border-green-300 py-2 rounded-lg text-sm cursor-default"
        >
          <FaCheckCircle className="text-green-600" />
          Task Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
