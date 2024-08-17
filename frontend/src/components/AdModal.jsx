'use client';

import { useState, useEffect } from "react";
import Image from 'next/image';
import AddsImages from '../../public/images/AddsImages.jpg';
import { useRouter } from 'next/navigation';

export default function AdModal() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    // Automatically show the modal when the page loads
    setShowModal(true);

    // Set a timer to close the modal after 5 seconds
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 5000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (!showModal) return null;

  const handleProductClick = () => {
    router.push(`/publicproducts`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center bg-black bg-opacity-50">
      <div className="relative w-1/3 h-3/4 bg-white shadow-lg mt-5 ml-10">
        <button
          className="absolute top-2 right-2 text-3xl font-bold text-white hover:text-red-600 z-10"
          onClick={closeModal}
        >
          &times;
        </button>
        <div className="relative w-full h-full">
          <Image
            src={AddsImages}
            alt="Advertisement"
            className="w-full h-full object-cover cursor-pointer"
            layout="fill"
            onClick={handleProductClick}
          />
        </div>
      </div>
    </div>
  );
}
