'use client';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AxiosInstance from "@/components/AxiosInstance";
import { useRouter } from 'next/navigation';

const EmployeeCom = () => {
  const router = useRouter();
  const [records, setRecords] = useState([]);
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (router.query && router.query.name) {
      toast.success(router.query.name);
      router.replace('/EmployeeCom', undefined, { shallow: true });
    } else if (flag) {
      setFlag(false);
    }

    const receiveData = async () => {
      try {
        const res = await AxiosInstance.get('/ecommerce/employee');
        if (res && res.data && res.data.data && res.data.data.data) {
          setRecords(res.data.data.data);
          setData(res.data);
        } else {
          console.error('Unexpected response structure:', res);
        }
      } catch (error) {
        console.error('Error occurred:', error);
      }
    };

    receiveData();
  }, [flag, router.query?.name]);

  const deleteRecord = async (id) => {
    try {
      const res = await AxiosInstance.delete(`/ecommerce/employee?id=${id}`);
      if (res) {
        setFlag(true);
        toast.success('Employee deleted successfully!');
      }
    } catch (error) {
      toast.error('Error deleting product!');
    }
  };

  const updateRecord = async (item) => {
    router.push(`/updateproductpage?id=${item.id}`);
  };

  return (
    <div className="container mx-auto my-4 w-full bg-black ml-5">
    <h2 className="text-2xl font-bold mb-4 text-center">List Of Products</h2>
  
    <button
      className="btn btn-primary mt-3 bg-blue-500 text-white py-2 px-4 rounded"
      onClick={() => router.push('/addemployeepage')}
    >
      Add Product
    </button>
  
    <br />
    <br />
  
    {data ? <p>Total: {data.count}</p> : <p>Total: 0</p>}
  
    <div className="container mt-5 mr-10">
      {records ? (
        <div>
          {/* Header Row */}
          <div className="grid grid-cols-6 text-white font-bold bg-gray-900 p-2 rounded-t-lg">
            <span className="text-left">S.No</span>
            <span className="text-left">ID</span>
            <span className="text-left">Name</span>
            <span className="text-left">Position</span>
            <span className="text-left">Dept</span>
          </div>
  
          {/* Data Rows */}
          <ul className="list-none">
            {records.map((item, index) => (
              <li key={item.id} className="grid grid-cols-6 bg-gray-800 text-white p-2 border-t border-gray-700">
                <span className="text-left">{index + 1}</span>
                <span className="text-left">{item.id}</span>
                <span className="text-left">{item.first_name} {item.last_name}</span>
                <span className="text-left">{item.position}</span>
                <span className="text-left">{item.department}</span>
                <div className="col-span-6 flex justify-end space-x-2 mt-0">
                 <button
                    className="btn btn-danger bg-green-500 text-white py-1 px-2 rounded"
                    onClick={() => DetailRecord(item.id)}
                  >
                    Datail
                  </button>
                  <button
                    className="btn btn-primary bg-blue-500 text-white py-1 px-2 rounded"
                    onClick={() => updateRecord(item)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger bg-red-500 text-white py-1 px-2 rounded"
                    onClick={() => deleteRecord(item.id)}
                  >
                    Delete
                  </button>
                  
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  </div>
  



  

  );
};

export default EmployeeCom;



// return (
//     <div className="container mx-auto my-4 w-full bg-black ml-5">
//     <h2 className="text-2xl font-bold mb-4">List Of Products</h2>

//     <button
//       className='btn btn-primary mt-3 bg-blue-500 text-white py-2 px-4 rounded'
//       onClick={() => router.push('/addemployeepage')}
//     >
//       Add Product
//     </button>

//     <br />
//     <br />

//     {data ? <p>Total: {data.count}</p> : <p>Total: 0</p>}

//     <div className="container mt-5 mr-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         {records ? (
//           records.map((item) => (
//             <div key={item.id} className="col mb-4">
//               <div className="card">
//                 <img
//                   src={`http://localhost:8000/${item.image}`}
//                   className="card-image w-full h-48 object-cover"
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title text-lg font-bold">First Name: {item.first_name}</h5>
//                   <h5 className="card-title text-lg font-bold">Last Name: {item.last_name}</h5>
//                   <p className="card-text ">Email: {item.email}</p>
//                   <p className="card-text ">Cell Number: {item.phone_number}</p>
//                   <p className="card-text ">Hire Date: {item.hire_date}</p>
//                   <p className="card-text ">Position: {item.position}</p>
//                   <p className="card-text ">Dept: {item.department}</p>
//                   <p className="card-text ">Salary: {item.salary}</p>
//                   <div className="flex">
//                     <button
//                       className="btn btn-danger bg-red-500 text-white py-2 px-4 rounded mr-2"
//                       onClick={() => deleteRecord(item.id)}
//                     >
//                       Delete
//                     </button>
//                     <button
//                       className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded"
//                       onClick={() => updateRecord(item)}
//                     >
//                       Update
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Loading....</p>
//         )}
//       </div>
//     </div>
//     {/* <ToastContainer /> */}
//   </div>