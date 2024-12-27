/* eslint-disable no-unused-vars */
import React from 'react';
import { Input } from './ui/input.tsx';
import { Button } from './ui/button.tsx';
import { Link } from 'react-router'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/Authprovider.jsx';

const Login = () => {

      const [authUser, setAuthUser] = useAuth()

  const apiUrl = import.meta.env.VITE_API_URL;
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    // console.log(data)
    const userInfo = {
        email: data.email,
        password: data.password,
    }
    await axios.post(`${apiUrl}/api/v1/user/login`, userInfo)
    .then((response) => {
        console.log(response)
        if(response.data) {
          alert(`${response.data.message}`)
        }
        localStorage.setItem("ChatApp", JSON.stringify(response.data))
        setAuthUser(response.data);

    }, {
      withCredentials: true,
    })
    .catch((error) => {
        console.log(error)
        if(error.response) {
          alert(`Error: ${error.response.data.error}`)
        }
    })
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">ChatApp</h1>
        <h2 className="text-xl font-bold text-center text-gray-700 mb-8">Login</h2>

        <form
        onSubmit={handleSubmit(onSubmit)} 
         action="" className="space-y-4">
          
          <Input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <span className='text-xs text-red-500 font-semibold'>This Field is Required</span>}
          <Input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && <span className='text-xs text-red-500 font-semibold'>This Field is Required</span>}
          <div className="text-center">
            <span className="text-sm text-gray-600">
              Dont&apos;t Have an Account?{' '}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Signup
              </Link>
            </span>
          </div>

          <Button type='submit' className="w-full py-3 mt-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
