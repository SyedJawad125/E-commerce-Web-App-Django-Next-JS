'use client';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AxiosInstance from "@/components/AxiosInstance";
import { useRouter } from 'next/navigation';

const EmployeeCom = () => {
  const router = useRouter();
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

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
          setFilteredRecords(res.data.data.data); // Initialize filtered records
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
      toast.error('Error deleting employee!');
    }
  };

  const updateRecord = async (item) => {
    router.push(`/updateemployeepage?id=${item.id}`);
  };

  const DetailRecord = async (item) => {
    router.push(`/employeesdetail?id=${item.id}`);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = records.filter((record) => {
        const idMatch = record.id.toString() === value;
        const nameMatch = record.first_name.toLowerCase().includes(value) || record.last_name.toLowerCase().includes(value);

        return idMatch || nameMatch;
    });

    setFilteredRecords(filtered);
    setCurrentPage(1); // Reset to the first page
  };

  // Pagination logic
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredRecords.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredRecords.length / recordsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto my-4 w-full bg-black ml-5">
      <h2 className="text-2xl font-bold mb-4 text-center">Employees Record</h2>

      <button
        className="btn btn-primary mt-3 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => router.push('/addemployeepage')}
      >
        Add Employee
      </button>

      <br />
      <br />

      {data && data.data ? <p>Total: {data.data.count}</p> : <p>Total: 0</p>}

      {/* Search Bar */}
      <div className="flex justify-center mb-5">
        <input
          type="text"
          placeholder="Search by ID or Name"
          value={searchTerm}
          onChange={handleSearch}
          className="px-4 py-2 w-1/2 rounded-md border bg-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="container mt-5 mr-10">
        {currentRecords.length > 0 ? (
          <div>
            {/* Header Row */}
            <div className="grid grid-cols-6 text-white font-bold bg-gray-900 p-2 rounded-t-lg">
              <span className="text-left">S.No</span>
              <span className="text-left -ml-20">ID</span>
              <span className="text-left -ml-36">Name</span>
              <span className="text-left -ml-36">Position</span>
              <span className="text-left -ml-32">Dept</span>
            </div>

            {/* Data Rows */}
            <ul className="list-none">
              {currentRecords.map((item, index) => (
                <li key={item.id} className="grid grid-cols-6 bg-gray-800 text-white p-0 border-t border-gray-700 mt-4">
                  <span className="text-left ml-2 mt-4">{indexOfFirstRecord + index + 1}</span>
                  <span className="text-left -ml-20 mt-4">{item.id}</span>
                  <span className="text-left -ml-36 mt-4">{item.first_name} {item.last_name}</span>
                  <span className="text-left -ml-36 mt-4">{item.position}</span>
                  <span className="text-left -ml-32 mt-4">{item.department}</span>

                  <div className="col-span-6 flex justify-end space-x-2 mb-1 mr-5">
                    <button
                      className="btn btn-danger bg-green-500 text-white py-1 px-2 rounded"
                      onClick={() => DetailRecord(item.id)}
                    >
                      Detail
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

            {/* Pagination Controls */}
            <div className="flex justify-center mt-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`px-3 py-1 mx-1 rounded ${
                    currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <p>No Employees found.</p>
        )}
      </div>
    </div>
  );
};

export default EmployeeCom;
