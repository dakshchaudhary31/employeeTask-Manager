import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import {
  FaTasks,
  FaCheckCircle,
  FaTimesCircle,
  FaPlayCircle,
  FaUser
} from 'react-icons/fa';

const AllTask = ({data}) => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="w-full max-w-[1450px]  mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-4 sm:p-6">
      
      {/* Header Row - visible on medium and larger screens */}
      <div className="hidden md:grid grid-cols-5 text-white bg-gray-700 py-3 px-2 rounded-lg font-semibold text-center mb-3">
        <span className="flex items-center justify-center gap-1">
          <FaUser /> Employee
        </span>
        <span className="flex items-center justify-center gap-1">
          <FaTasks /> New Task
        </span>
        <span className="flex items-center justify-center gap-1">
          <FaPlayCircle /> Active Task
        </span>
        <span className="flex items-center justify-center gap-1">
          <FaCheckCircle /> Completed Task
        </span>
        <span className="flex items-center justify-center gap-1">
          <FaTimesCircle /> Failed Task
        </span>
      </div>

      {/* Scrollable list of employees */}
      <div className="h-[70vh] overflow-auto space-y-4 pr-1 custom-scrollbar md:hidden">
        {userData.map((elem) => (
          <div
            key={elem.id}
            className="bg-white p-4 rounded-lg shadow-lg text-gray-800 flex flex-col md:flex-row md:justify-between md:items-center gap-3"
          >
            <div className="md:w-1/5 flex items-center gap-2">
              <FaUser className="text-blue-600" />
              <span className="font-semibold">{elem.firstName}</span>
            </div>
            <div className="md:w-1/5 flex items-center gap-2">
              <FaTasks className="text-blue-500" />
              <span>
                New Task: <span className="font-medium">{elem.taskCounts.newTask}</span>
              </span>
            </div>
            <div className="md:w-1/5 flex items-center gap-2">
              <FaPlayCircle className="text-yellow-500" />
              <span>
                Active Task: <span className="font-medium">{elem.taskCounts.active}</span>
              </span>
            </div>
            <div className="md:w-1/5 flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              <span>
                Completed Task: <span className="font-medium">{elem.taskCounts.completed}</span>
              </span>
            </div>
            <div className="md:w-1/5 flex items-center gap-2">
              <FaTimesCircle className="text-red-600" />
              <span>
                Failed Task: <span className="font-medium">{elem.taskCounts.failed}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Scrollable List */}
      <div className="h-[30vh] overflow-auto space-y-4 pr-1 custom-scrollbar hidden md:block">
        {userData.map((elem) => (
          <div
            key={elem.id}
            className="bg-white p-4 rounded-lg shadow-lg text-gray-800 flex flex-col md:flex-row md:justify-between md:items-center gap-3"
          >
            <div className="md:w-1/5 flex items-center gap-2 justify-center">
              <FaUser className="text-blue-600" />
              <span className="font-semibold">{elem.firstName}</span>
            </div>
            <div className="md:w-1/5 flex items-center gap-2 justify-center">
              <FaTasks className="text-blue-500 tece" />
              <span> <span className="font-medium">{elem.taskCounts.newTask}</span></span>
            </div>
            <div className="md:w-1/5 flex items-center gap-2 justify-center">
              <FaPlayCircle className="text-yellow-500 tece" />
              <span> <span className="font-medium">{elem.taskCounts.active}</span></span>
            </div>
            <div className="md:w-1/5 flex items-center gap-2 justify-center">
              <FaCheckCircle className="text-green-500 tece" />
              <span> <span className="font-medium">{elem.taskCounts.completed}</span></span>
            </div>
            <div className="md:w-1/5 flex items-center gap-2 justify-center">
              <FaTimesCircle className="text-red-600 tece" />
              <span> <span className="font-medium">{elem.taskCounts.failed}</span></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
