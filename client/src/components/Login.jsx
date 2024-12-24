/* eslint-disable no-unused-vars */
import React from 'react';
import { Input } from './ui/input.tsx';
import { Button } from './ui/button.tsx';
import { Link } from 'react-router'

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">ChatApp</h1>
        <h2 className="text-xl font-bold text-center text-gray-700 mb-8">Login</h2>

        <form action="" className="space-y-4">
          
          <Input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
          />
          <Input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
          />

          <div className="text-center">
            <span className="text-sm text-gray-600">
              Dont&apos;t Have an Account?{' '}
              {/* <Link to="/login" className="text-blue-500 hover:underline">
                Signup
              </Link> */}
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
