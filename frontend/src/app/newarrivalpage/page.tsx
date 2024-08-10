'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AxiosInstance from "@/components/AxiosInstance";

// Define the structure of a record
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const NewArrival = () => {
  const router = useRouter();
  const [records, setRecords] = useState<Product[]>([]); // Use the Product interface
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const receiveData = async () => {
      try {
        const res = await AxiosInstance.get(`/ecommerce/publicproduct`);
        if (res) {
          setRecords(res.data.data.data);
        }
      } catch (error) {
        console.log('Error occurred:', error);
      }
    };
    receiveData();

    if (flag) {
      toast.success('Product deleted');
      setFlag(false);
    }
  }, [flag]);

  const handleProductClick = () => {
    // router.push(`/productdetailpage?productId=${productId}`);
     router.push(`/publicproducts`);
  };

  return (
    <div className="container mx-auto mt-5 mb-24 ml-52">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {records.length > 0 ? (
          records.map((item) => (
            <div className="w-full mb-4" key={item.id}>
              <div
                className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition transform hover:scale-105"
                onClick={() => handleProductClick()}
              >
                <img
                  src={`http://localhost:8000/${item.image}`}
                  className="w-full h-40 object-cover"
                  alt={item.name}
                />
                <div className="p-4">
                  <h5 className="text-sm font-bold mb-2">{item.name}</h5>
                  <p className="text-xs text-gray-600 mb-1">Des: {item.description}</p>
                  <p className="text-xs text-gray-600">Price: {item.price}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading....</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default NewArrival;
