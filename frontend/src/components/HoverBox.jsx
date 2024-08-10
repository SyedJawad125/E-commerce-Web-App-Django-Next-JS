'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const HoverBox = ({ productId, images }) => {
  const router = useRouter();

  const handleProductClick = (productId) => {
    router.push(`/productdetailpage?productId=${productId}`);
  };

  return (
    <div
      className="hover-box"
      style={{
        position: 'absolute',
        display: 'none',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Product ${index}`}
          onClick={() => handleProductClick(productId)}
          style={{ width: '100px', height: '100px', cursor: 'pointer' }}
        />
      ))}
    </div>
  );
};

export default HoverBox;
