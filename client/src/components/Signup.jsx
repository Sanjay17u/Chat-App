/* eslint-disable no-unused-vars */
import React from 'react';
import { Input } from './ui/input.tsx';
import { Button } from './ui/button.tsx';
import { Link } from 'react-router';
import { useForm } from 'react-hook-form'
import axios from "axios"
import { useAuth } from '../context/Authprovider.jsx';

const Signup = () => {

    const [authUser, setAuthUser] = useAuth()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const password = watch("password", "")
    const confirmPassword = watch("confirmPassword", "")

    const validatePasswordMatch = (value) => {
        return value === password || "Password Do Not Match"
    }

    const apiUrl = import.meta.env.VITE_API_URL;


    const onSubmit = async (data) => {
        // console.log(data)
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword
        }
        console.log(userInfo)
        await axios.post(`${apiUrl}/api/v1/user/signup`, userInfo)
        .then((response) => {
            console.log(response)
            if(response.data) {
              alert("Signup Successfully")
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
        <h2 className="text-xl font-bold text-center text-gray-700 mb-8">Signup</h2>

        <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="space-y-4">
          <Input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Fullname"
            {...register("fullname", { required: true })}
          />
          {errors.fullname && <span className='text-xs text-red-500 font-semibold'>This Field is Required</span>}
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
          <Input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Confirm Password"
            {...register("confirmPassword", { required: true, validate:validatePasswordMatch })}
          />
          {errors.confirmPassword && <span className='text-xs text-red-500 font-semibold'>
           {errors.confirmPassword.message}
            </span>}
          <div className="text-center">
            <span className="text-sm text-gray-600">
              Already Have an Account?{' '}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </span>
          </div>

          <Button type='submit' className="w-full py-3 mt-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
            Signup
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
