import React from 'react'
import { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = ({handleLogin}) => {
     const [showPassword, setShowPassword] = useState(false);
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")


     const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password)

        setEmail("")
        setPassword("")
        
     }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-600 flex items-center justify-center p-4 flex-col">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg space-y-6">
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
        <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>

        {/* Email Field */}
        <div className="relative text-gray-500 my-4">
          <span className="absolute top-3 left-3 text-gray-500">
            <FaEnvelope />
          </span>
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
            }}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Field */}
        <div className="relative text-gray-500 mb-3">
          <span className="absolute top-3 left-3 text-gray-500">
            <FaLock />
          </span>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            value={password}
            onChange={(e) => {
                setPassword(e.target.value)
            }}
            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-3 right-3 text-gray-500 cursor-pointer"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-md transition duration-200"
        >
          Login
        </button>
      </form>
      </div>
      <div className='text-xs'>
      <h2>Admin - admin@me.com , 123</h2>
      <h2>Employee1 - employee1@example.com , 123</h2>
      <h2>Employee2 - employee2@example.com , 123</h2>
      <h2>Employee3 - employee3@example.com , 123</h2>
      <h2>Employee4 - employee4@example.com , 123</h2>
      <h2>Employee5 - employee5@example.com , 123</h2>
      </div>
    </div>
  )
}

export default Login
