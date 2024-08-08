'use client'
import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import AxiosInstance from "@/components/AxiosInstance";



const SignUp = () => {
    const router = useRouter();
    const [first_name, setfirst_name] = useState('');
    const [last_name, setlast_name] = useState('');
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [password, setpassword] = useState('');
  
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();

      const payload = {"first_name":first_name , "last_name":last_name, "username":username , "email":email , 
        "phone":phone, "password":password}
        try {
      const response = await AxiosInstance.post('/user/register', payload );
  
        if (response) {
          console.log('Response:', response.data);
          router.push('/Login');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  

  return (
    <div className="bg-black-100 min-h-screen flex items-center justify-center">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center justify-center ml-10 ">
    <div className="w-full lg:w-1/3 mb-10 lg:mb-0 mr-20">
        <h3 className="text-4xl font-extrabold mb-6 text-center lg:text-left">
          The HRM System <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
            Offer Best Performance
          </span>
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-6 text-center lg:text-left">
          A Human Resource Management System (HRMS) is a comprehensive software
          suite designed to streamline and automate various HR processes within
          an organization. It encompasses functionalities like recruitment, onboarding,
          payroll, performance management, employee attendance, benefits administration,
          and compliance with labor laws.
        </p>
    </div>

    <div className="lg:w-1/2 mb-5 lg:mb-0">
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8" style={{ marginRight: "150px" }}>
          <form>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 px-3 mb-4">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="form3Example1">
                  First name
                </label>
                <input type="text" id="form3Example1" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={first_name}
                  onChange={e => setfirst_name(e.target.value)} />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-4">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="form3Example2">
                  Last name
                </label>
                <input type="text" id="form3Example2" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={last_name}
                  onChange={e => setlast_name(e.target.value)} />
              </div>
            </div>
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="form3Example3">
                User Name
              </label>
              <input type="text" id="form3Example3" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={username}
                onChange={e => setusername(e.target.value)} />
            </div>
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="form3Example3">
                Email address
              </label>
              <input type="email" id="form3Example3" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={email}
                onChange={e => setemail(e.target.value)} />
            </div>
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="form3Example3">
                Phone Number
              </label>
              <input type="text" id="form3Example3" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={phone}
                onChange={e => setphone(e.target.value)} />
            </div>
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="form3Example4">
                Password
              </label>
              <input type="password" id="form3Example4" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={password}
                onChange={e => setpassword(e.target.value)} />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default SignUp