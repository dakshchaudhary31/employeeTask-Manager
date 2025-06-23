import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const AcceptTask = ({ data, onComplete, onFail }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-blue-50 border border-blue-200 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-center text-xs">
        <span className="bg-blue-200 text-blue-800 font-medium px-3 py-1 rounded-full">
          {data.category}
        </span>
        <span className="text-gray-500">{data.taskDate}</span>
      </div>

      {/* Title */}
      <h2 className="mt-5 text-xl font-bold text-blue-900">{data.taskTitle}</h2>

      {/* Description */}
      <p className="text-sm mt-3 text-gray-700 leading-5">{data.taskDescription}</p>

      {/* Action Buttons */}
      <div className="flex justify-between mt-6 gap-2">
        <button
          onClick={() => onComplete?.(data.id)}
          className="flex items-center gap-1 bg-green-100 hover:bg-green-200 text-green-800 px-3 py-2 rounded-lg text-sm transition duration-200"
        >
          <FaCheckCircle className="text-green-600" /> Completed
        </button>
        <button
          onClick={() => onFail?.(data.id)}
          className="flex items-center gap-1 bg-red-100 hover:bg-red-200 text-red-800 px-3 py-2 rounded-lg text-sm transition duration-200"
        >
          <FaTimesCircle className="text-red-600" /> Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
