'use client';
import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
// import TopNavbarCom from "@/components/TopNavbarCom";
import AxiosInstance from "@/components/AxiosInstance";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { AuthCon } from "@/components/AuthContext";

const Login = () => {
  const router = useRouter();
  const { login } = useContext(AuthCon);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [flag, setFlag] = useState(false);

  // ReactToastify
  // if (router.query.message) {
  //   toast.success(router.query.message);
  //   router.replace('/login', undefined, { shallow: true });
  // } else if (flag === true) {
  //   toast.success('Not Registered');
  //   setFlag(false);
  // }

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const payload = { username, password };
      const response = await AxiosInstance.post('/user/login', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        login(response.data.data.token);
        router.push("/admindashboard" );
      }
    } catch (error) {
      // toast.error("invalid Username or Password")
      console.error('Error:', error);
    }
  };

  const Signupfunction = () => {
    router.push('/signup');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded-lg p-8 mt-5">
          <div className="mb-6">
            <h3 className="text-center text-2xl font-semibold">Login</h3>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">User Name</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter Username"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <div id="emailHelp" className="mt-2 text-xs text-gray-500">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Login
              </button>
              <div className="mt-4 text-center">
                <button type="button" className="text-sm text-blue-500 hover:underline" onClick={Signupfunction}>Sign Up</button>
              </div>
            </form>
          </div>
          <div className="mt-6 text-center text-gray-500">
            <small>&copy; 2024 HRMS</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
