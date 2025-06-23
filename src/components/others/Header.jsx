import React from 'react'
import { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'


const Header = (props) => {
//   const [username, setUsername] = useState('')

//   if (!data) {
//     setUsername('Admin')
//   }else{
//     setUsername(data.firstName)
//  }

 const logoutUser = () => {
  localStorage.removeItem('LoggedInUser');
  props.changeUser('')
  // window.location.reload();
 }


  return (
    <div className='flex items-end justify-between'>
        <div>
        <h1 className='text-2xl font-medium'>Hello,</h1>
        <h1 className='text-3xl font-semibold'>{props.data?.firstName || 'Admin'} 👋</h1>
        </div>
        <button onClick={logoutUser} className='bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium cursor-pointer'>Logout</button>
    </div>
  )
}

export default Header
