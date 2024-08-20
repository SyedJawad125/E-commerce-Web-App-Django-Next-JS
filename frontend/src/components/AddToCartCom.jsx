'use client';
import React, { useContext } from 'react';
import CartContext from '@/components/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const AddToCartPage = () => {
    const { cart, dispatch } = useContext(CartContext);

    const router = useRouter();

    const handleRemoveFromCart = (product) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
        toast.success('Product removed from cart');
    };

    const handleProceedToCheckout = () => {
        router.push('/checkout');
    };

    const handleContinueShopping = () => {
        router.push('/publiccategories');
    };

    return (
        <div className='container mx-auto my-6'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {cart.length > 0 ? cart.map(item => (
                    <div key={item.id} className="bg-white shadow-md rounded-lg p-4">
                        <img src={`http://localhost:8000/${item.image}`} alt="Product" className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="mt-4">
                            <h5 className="text-lg font-semibold">{item.name}</h5>
                            <p className="text-gray-600">Price: ${item.price}</p>
                            <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                onClick={() => handleRemoveFromCart(item)}>
                                Remove
                            </button>
                        </div>
                    </div>
                )) : <p className="text-center col-span-full">Your cart is empty</p>}
            </div>
            {cart.length > 0 && (
                <div className="mt-6 flex justify-center space-x-4">
                    <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
                        onClick={handleProceedToCheckout}>
                        Proceed to Checkout
                    </button>
                    <button className="bg-gray-500 text-white px-6 py-3 rounded hover:bg-gray-600"
                        onClick={handleContinueShopping}>
                        Continue Shopping
                    </button>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default AddToCartPage;
