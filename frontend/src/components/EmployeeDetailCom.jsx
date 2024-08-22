'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import AxiosInstance from '@/components/AxiosInstance';

const EmployeeDetail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const EpmloyeeId = searchParams.get('EpmloyeeId');

    if (EpmloyeeId) {
      const fetchEmployees = async () => {
        try {
          const res = await AxiosInstance.get(`/ecommerce/employee?id=${EpmloyeeId}`);
          if (res && res.data && res.data.data) {
            setEmployees(res.data.data.data); // Convert to array if it's a single object
          } else {
            console.error('Unexpected API response structure:', res.data);
          }
        } catch (error) {
          console.error('Error fetching employee:', error);
        }
      };
      fetchEmployees();
    }
  }, [searchParams]);

  return (
    <div className="container mx-auto my-4 p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">Employee Details</h2>

      {employees.length ? (
        employees.map((employee) => (
          
          <div key={employee.id} className="grid grid-cols-2 gap-4 text-gray-400 leading-relaxed text-sm md:text-base lg:text-lg">
            <div>
              <p><strong>First Name:</strong> {employee.first_name}</p>
              <p><strong>Last Name:</strong> {employee.last_name}</p>
              <p><strong>Email:</strong> {employee.email}</p>
            </div>
            <div>
              <p><strong>Phone Number:</strong> {employee.phone_number}</p>
              <p><strong>Date of Birth:</strong> {employee.date_of_birth}</p>
              <p><strong>Hire Date:</strong> {employee.hire_date}</p>
            </div>
            <div>
              <p><strong>Position:</strong> {employee.position}</p>
              <p><strong>Department:</strong> {employee.department}</p>
              <p><strong>Salary:</strong> {employee.salary}</p>
            </div>
            <div>
              {employee.image && (
                <img 
                  src={`http://localhost:8000/${employee.image}`} 
                  alt={`${employee.first_name} ${employee.last_name}`} 
                  className="rounded-lg shadow-lg w-48 h-48 object-cover" 
                />
              )}
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No employee details available.</p>
      )}
      <button
        className="mt-4 bg-blue-700 text-white py-2 px-4 rounded"
        onClick={() => router.push('/employeepage')}
      >
        Back to Employee List
      </button>
    </div>
  );
};

export default EmployeeDetail;





// 'use client';
// import React, { useEffect, useState } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import AxiosInstance from '@/components/AxiosInstance';

// interface Employee {
//   id: number;
//   first_name: string;
//   last_name: string;
//   email: string;
//   phone_number: string;
//   date_of_birth: string;
//   hire_date: string;
//   position: string;
//   department: string;
//   salary: number;
// }

// const EmployeeDetail = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [employee, setEmployee] = useState<Employee | null>(null);
//   const id = searchParams.get('id'); // Fetch the ID from the query parameters

//   useEffect(() => {
//     if (id) {
//       const fetchEmployeeDetail = async () => {
//         try {
//           const res = await AxiosInstance.get(`/ecommerce/employee?id=${id}`);
//           if (res && res.data && res.data.data) {
//             setEmployee(res.data.data);
//           } else {
//             console.error('Unexpected response structure:', res);
//           }
//         } catch (error) {
//           console.error('Error fetching employee details:', error);
//         }
//       };

//       fetchEmployeeDetail();
//     }
//   }, [id]);

//   if (!employee) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="container mx-auto my-4 p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Employee Details</h2>
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <p><strong>First Name:</strong> {employee.first_name}</p>
//           <p><strong>Last Name:</strong> {employee.last_name}</p>
//           <p><strong>Email:</strong> {employee.email}</p>
//         </div>
//         <div>
//           <p><strong>Phone Number:</strong> {employee.phone_number}</p>
//           <p><strong>Date of Birth:</strong> {employee.date_of_birth}</p>
//           <p><strong>Hire Date:</strong> {employee.hire_date}</p>
//         </div>
//         <div>
//           <p><strong>Position:</strong> {employee.position}</p>
//           <p><strong>Department:</strong> {employee.department}</p>
//           <p><strong>Salary:</strong> {employee.salary}</p>
//         </div>
//       </div>
//       <button
//         className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
//         onClick={() => router.push('/EmployeeCom')}
//       >
//         Back to Employee List
//       </button>
//     </div>
//   );
// };

// export default EmployeeDetail;
