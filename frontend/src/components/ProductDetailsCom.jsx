// 'use client';
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import AxiosInstance from '@/components/AxiosInstance';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ProductDetailPage = () => {
//     const router = useRouter();
//     const [product, setProduct] = useState({});  // Initialize as an object

//     useEffect(() => {
//         if (!router.isReady) return;

//         const ProductId = router.query?.ProductId;

//         if (ProductId) {
//             const fetchProduct = async () => {
//                 try {
//                     const res = await AxiosInstance.get(`/ecommerce/publicproduct?id=${ProductId}`);
//                     if (res && res.data && res.data.data && res.data.data.data) {
//                         setProduct(res.data.data.data);
//                     }
//                 } catch (error) {
//                     console.log('Error fetching product:', error);
//                 }
//             };
//             fetchProduct();
//         }
//     }, [router.isReady, router.query]);

//     if (!product || Object.keys(product).length === 0) {
//         return <p>Loading...</p>;
//     }

//     const handleBackButton = () => {
//         router.push('/publiccategory'); // Redirect to the main product listing page
//     };

//     return (
//         <div className="container mx-auto my-4 px-4">
//             <div className="mb-4">
//                 <button
//                     type="button"
//                     className="bg-gray-500 text-white py-2 px-4 rounded"
//                     onClick={handleBackButton}
//                 >
//                     Go Back
//                 </button>
//             </div>
//             <div className="product-detail flex flex-col items-center">
//                 <img src={`http://localhost:8000/${product.image}`} alt={product.name} className="w-64 h-64 object-cover" />
//                 <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
//                 <p className="mt-2">Description: {product.description}</p>
//                 <p className="mt-2">Price: {product.price}</p>
//                 {/* Add to Cart button can be added here */}
//             </div>
//             <ToastContainer />
//         </div>
//     );
// };

// export default ProductDetailPage;



'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import AxiosInstance from "@/components/AxiosInstance";

const CategoryWiseProductCom = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const ProductId = searchParams.get('ProductId'); // Safely retrieve categoryId from query params

    console.log('Product ID:', ProductId); // Debugging: Log the categoryId

    if (ProductId) {
      const fetchProduct = async () => {
        try {
          const res = await AxiosInstance.get(`/ecommerce/publicproduct?id=${ProductId}`);
          console.log('API Response:', res.data); // Debugging: Log the API response
          if (res && res.data && res.data.data && Array.isArray(res.data.data.data)) {
            setProducts(res.data.data.data);
          } else {
            console.error('Unexpected API response structure:', res.data);
          }
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
      fetchProduct();
    }
  }, [searchParams]);

  const handleBackButton = () => {
    router.push('/publicproducts');
  };

  return (
<div className="container mx-auto mt-6 mb-24 px-4 sm:px-6 lg:px-8">
  <div className="flex justify-between items-center mb-8">
    <button
      type="button"
      className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
      onClick={handleBackButton}
    >
      Go Back
    </button>
    <h2 className="text-3xl font-bold">Product Details</h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {products.length ? (
      products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src={`http://localhost:8000/${product.image}`}
            className="w-full h-64 object-cover"
            alt={product.name}
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </div>
      ))
    ) : (
      <p className="col-span-full text-center text-gray-500">No products found for this category.</p>
    )}
  </div>
</div>



  );
};

export default CategoryWiseProductCom;
