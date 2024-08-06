'use client';
import {React, useEffect, useState} from 'react'
// import { useNavigate, useLocation} from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import AxiosInstance from "@/components/AxiosInstance";
import { useRouter } from 'next/navigation';




const CategoryCom = () => {

    // const navigate = useNavigate()
    // const location = useLocation()

    const router = useRouter();
    
    const [records, setRecords] = useState([])
    const [data, setData] = useState([])
    const [flag, setFlag] = useState(false)


    useEffect(()=>{
        // if (location.state && location.state.name){
        //     toast.success(location.state.name)
        //     navigate('/category', {state: ''})
        //   }
        //   else if (flag == true){
        //     toast.success('Product deleted')
        //     setFlag(false)
        //   }

        const receiveData = async (flag, location) => {
            try {
                const res = await AxiosInstance.get('/ecommerce/category');
                console.log('API response:', res);
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
        }, [flag, location.state]); // Ensure flag and location.state are defined
    

    const deleteRecord = async (id) => {
    try{
        const res = await AxiosInstance.delete(`/ecommerce/category?id=${id}`)
        if(res){
            console.log('Delete Successfully')
            setFlag(true)
        }
    }
    catch(error){
        console.log(error)
    }
    }
//     const updateRecord = async (item) => {
//     navigate('/Update/Updatecategory', {state: {data: item}})
// }


  return (
    <div className="container mx-auto my-4 ml-56 w-3/4">
    <h2 className="text-2xl font-bold mb-4">List Of Categories</h2>
  
    <button
        className='btn btn-primary mt-3 bg-blue-500 text-white py-2 px-4 rounded'
        onClick={() => router.push('/Add/Addcategory')}
      >
        Add Category
      </button>
  
    <br />
    <br />
  
    {data ? <p>Total: {data.count}</p> : <p>Total: 0</p>}
  
    <div className="container mt-5 mr-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {records ? (
          records.map((item) => (
            <div key={item.id} className="col mb-4">
              <div className="card">
                <img
                  src={`http://localhost:8000/${item.image}`}
                  className="card-image w-full h-48 object-cover"
                />
                <div className="card-body">
                  <h5 className="card-title text-lg font-bold">{item.name}</h5>
                  <p className="card-text">Des: {item.description}</p>
                  {/* <p className="card-context">{item.created_by_name}</p> */}
                  <div className="flex">
                    <button
                      className="btn btn-danger bg-red-500 text-white py-2 px-4 rounded mr-2"
                      onClick={() => deleteRecord(item.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded"
                      onClick={() => updateRecord(item)}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </div>
    {/* <ToastContainer /> */}
  </div>
  
  )
}
export default CategoryCom