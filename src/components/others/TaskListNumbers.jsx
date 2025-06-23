import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div id='TaskListNumber' className='flex mt-10 justify-between gap-5 screen overflow-auto '>
      <div className='w-[45%] px-9 py-6 bg-yellow-400 rounded-xl'>
      <h2 className='text-2xl font-semibold'>{data.taskCounts.newTask}</h2>
      <h3 className='text-xl font-semibold'>New Task</h3>
      </div>
      <div className='w-[45%] px-9 py-6 bg-green-400 rounded-xl'>
      <h2 className='text-2xl font-semibold'>{data.taskCounts.completed}</h2>
      <h3 className='text-lg md:text-xl font-semibold'>Completed Task</h3>
      </div>
      <div className='w-[45%] px-9 py-6 bg-blue-400 rounded-xl'>
      <h2 className='text-2xl font-semibold'>{data.taskCounts.active}</h2>
      <h3 className='text-xl font-semibold'>Active Task</h3>
      </div>
      <div className='w-[45%] px-9 py-6 bg-red-400 rounded-xl'>
      <h2 className='text-2xl font-semibold'>{data.taskCounts.failed}</h2>
      <h3 className='text-xl font-semibold'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
