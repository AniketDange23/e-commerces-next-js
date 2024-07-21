// src/pages/LoginPage.js
"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const LoginForm = ({ toggleForm }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login form submitted");
    alert("Login successful!");
  };

  return (
    <div className="w-full max-w-md p-8 space-y-8">
      <h2 className="text-center text-3xl font-extrabold text-gray-900">Login</h2>
      <form className="mt-8 space-y-6" onSubmit={handleLogin}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div className="mb-4">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
        </div>
        <div>
          <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Login
          </button>
        </div>
      </form>
      <div className="text-center gap-2 flex  justify-center">
      <span className=" text-gray-700 ">Don't have an account?</span>

        <button onClick={toggleForm} className="text-indigo-600 hover:text-indigo-500">
           Sign Up
        </button>
      </div>
    </div>
  );
};

const SignupForm = ({ toggleForm }) => {
  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup form submitted");
    alert("Signup successful!");
  };

  return (
    <div className="w-full max-w-md p-8 space-y-8">
      <h2 className="text-center text-3xl font-extrabold text-gray-900">Signup</h2>
      <form className="mt-8 space-y-6" onSubmit={handleSignup}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div className="mb-4">
            <label htmlFor="full-name" className="sr-only">Full Name</label>
            <input id="full-name" name="name" type="text" autoComplete="name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Full Name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <br />
            <label htmlFor="password" className="sr-only">Password</label>
            <input id="password" name="password" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
        </div>
        <div>
          <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Signup
          </button>
        </div>
      </form>
      <div className="text-center gap-2 flex  justify-center">
        <span className="text-gray-700"> Already have an account?</span>

        <button onClick={toggleForm} className="text-indigo-600 hover:text-indigo-500">
          Login
        </button>
      </div>
    </div>
  );
};

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => setShowLogin(!showLogin);

  return (
    <div className="flex mt-20 ">
      {/* Left side - Image */}
      <div className=" lg:flex flex-1 justify-center items-center  ">
        <Image src="/login.jpg" alt="Auth Image" width={570} height={400} />
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex flex-col justify-center items-center bg-cover">
        {showLogin ? <LoginForm toggleForm={toggleForm} /> : <SignupForm toggleForm={toggleForm} />}
      </div>
    </div>
  );
};

export default LoginPage;
