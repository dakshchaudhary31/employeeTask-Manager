import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext);
  

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({taskTitle, taskDescription, taskDate, category, assignTo, active:false, newTask:true, failed:false, completed:false})

   const data = userData

   data.forEach(function(elem){
    if (assignTo == elem.firstName) {
      elem.tasks.push(newTask)
      elem.taskCounts.newTask = elem.taskCounts.newTask + 1 
    }
   })
   setUserData(data)
   
    setTaskDate("")
    setTaskTitle("")
    setAssignTo("")
    setTaskDescription("")
    setCategory("")
    
  }
  return (
    <div className="w-full px-4 py-8 mt-5">
      <div className="w-full mx-auto bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Create a New Task</h2>
        
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column Inputs */}
          <div className="space-y-4">
            {/* Task Title */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">Task Title</label>
              <input
                type="text"
                value={taskTitle}
                onChange={(e)=>{
                  setTaskTitle(e.target.value)
                }}
                placeholder="Title"
                className="w-full bg-gray-700 text-white placeholder:text-gray-400 px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">Date</label>
              <input
                type="date"
                value={taskDate}
                onChange={(e)=>{
                  setTaskDate(e.target.value)
                }}
                className="w-full bg-gray-700 text-white placeholder:text-gray-400 px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Assign To */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">Assign To</label>
              <input
                type="text"
                value={assignTo}
                onChange={(e)=>{
                  setAssignTo(e.target.value)
                }}
                placeholder="Employee Name"
                className="w-full bg-gray-700 text-white placeholder:text-gray-400 px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">Category</label>
              <input
                type="text"
                value={category}
                onChange={(e)=>{
                  setCategory(e.target.value)
                }}
                placeholder="Design, Dev, etc.."
                className="w-full bg-gray-700 text-white placeholder:text-gray-400 px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Right Column - Description and Button */}
          <div className="flex flex-col h-full justify-between">
            <div>
              <label className="block text-sm font-medium text-white mb-1">Description</label>
              <textarea
                placeholder="Describe the task..."
                rows="8"
                value={taskDescription}
                onChange={(e)=>{
                  setTaskDescription(e.target.value)
                }}
                className="w-full bg-gray-700 text-white placeholder:text-gray-400 px-4 py-2 border border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
