'use client';
import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import AxiosInstance from '@/components/AxiosInstance';
// import CartContext from '@/context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetailPage = () => {
    const router = useRouter();
    const [product, setProduct] = useState([]);
    // const { dispatch } = useContext(CartContext);

    useEffect(() => {
        if (router.query && router.query.ProductId) {
            const fetchProduct = async () => {
                try {
                    const res = await AxiosInstance.get(`/ecommerce/publicproduct?id=${router.query.ProductId}`);
                    if (res) {
                        setProduct(res.data.data.data);
                    }
                } catch (error) {
                    console.log('Error fetching products:', error);
                }
            };
            fetchProduct();
        }
    }, [router.query]);

    const handleAddToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
        toast.success('Product added to cart');
    };

    if (!product.length) {
        return <p>Loading...</p>;
    }

    const handleBackButton = () => {
        router.push('/publiccategory'); // Redirect to the main product listing page
    };

    return (
        <div className="container mx-auto my-4 px-4">
            <div className="mb-4">
                <button
                    type="button"
                    className="bg-gray-500 text-white py-2 px-4 rounded"
                    onClick={handleBackButton}
                >
                    Go Back
                </button>
            </div>
            {product.map((item) => (
                <div key={item.id} className="mb-8">
                    <div className="product-detail flex flex-col items-center">
                        <img src={`http://localhost:8000/${item.image}`} alt={item.name} className="w-64 h-64 object-cover" />
                        <h1 className="text-2xl font-bold mt-4">{item.name}</h1>
                        <p className="mt-2">Description: {item.description}</p>
                        <p className="mt-2">Price: {item.price}</p>
                        {/* <button
                            className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                            onClick={() => handleAddToCart(item)}
                        >
                            Add to Cart
                        </button> */}
                    </div>
                </div>
            ))}
            {/* <CategoryVerticalSlider /> */}
            <ToastContainer />
        </div>
    );
};

export default ProductDetailPage;
