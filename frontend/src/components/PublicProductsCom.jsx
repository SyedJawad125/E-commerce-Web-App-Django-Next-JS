'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AxiosInstance from "@/components/AxiosInstance";
// import CategoryVerticalSlider from './CategoryVerticalSlider';

const PublicProducts = () => {
    const router = useRouter();
    const [records, setRecords] = useState([]);
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        if (router.query && router.query.name) {
            toast.success(router.query.name);
            router.push('/products', undefined, { shallow: true });
        } else if (flag) {
            toast.success('Product deleted');
            setFlag(false);
        }

        const receiveData = async () => {
            try {
                const res = await AxiosInstance.get('/ecommerce/publicproduct');
                if (res) {
                    setRecords(res.data.data.data);
                    setData(res.data);
                }
            } catch (error) {
                console.log('Error occurred', error);
            }
        };

        receiveData();
    }, [flag, router.query?.name]);

    const handleProductClick = (ProductId) => {
        router.push({
            pathname: '/productdetailpage',
            query: { ProductId },
        });
    };

    return (
      <div className="container mx-auto my-4 ml-56 w-3/4">
      <h2 className="text-2xl font-bold mb-4">List Of Products</h2>
      <br />
      <br />
      {data ? <p>Total: {data.count}</p> : <p>Total: 0</p>}
      <div className="container mt-5 mr-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {records.length ? (
                  records.map((item) => (
                      <div key={item.id} className="col mb-4">
                          <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={() => handleProductClick(item.id)}>
                              <img src={`http://localhost:8000/${item.image}`} className="w-full h-48 object-cover" alt={item.name} />
                              <div className="p-4">
                                  <h5 className="text-lg font-bold text-gray-800">{item.name}</h5>
                                  <p className="text-sm text-gray-600 mt-2">Description: {item.description}</p>
                                  <p className="text-sm text-gray-600 mt-2 font-bold">Price: {item.price}</p>
                                  <p className="text-sm text-gray-600 mt-2">Category: {item.category_name}</p>
                                  
                              </div>
                          </div>
                      </div>
                  ))
              ) : (
                  <p>Loading....</p>
              )}
          </div>
      </div>
      <ToastContainer />
      {/* <CategoryVerticalSlider /> */}
  </div>  
    );
};

export default PublicProducts;
