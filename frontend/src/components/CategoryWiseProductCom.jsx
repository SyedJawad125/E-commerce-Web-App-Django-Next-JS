'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AxiosInstance from '../components/AxiosInstance';
// import CategoryVerticalSlider from './CategoryVerticalSlider';
// import 'tailwindcss/tailwind.css';

const CategoryWiseProductCom = () => {
  const router = useRouter();
  // const { categoryId } = router.query;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (router.query && router.query.categoryId) {
      const fetchProduct = async () => {
          try {
              const res = await AxiosInstance.get(`/ecommerce/publicproduct?id=${router.query.categoryId}`);
              if (res) {
                  setProducts(res.data.data.data);
              }
          } catch (error) {
              console.log('Error fetching products:', error);
          }
      };
      fetchProduct();
  }
}, [router.query]);
  //   if (categoryId) {
  //     const fetchProducts = async () => {
  //       try {
  //         const res = await axiosInstance.get(`/ecommerce/publicproduct?category=${categoryId}`);
  //         if (res) {
  //           setProducts(res.data.data.data);
  //         }
  //       } catch (error) {
  //         console.log('Error fetching products:', error);
  //       }
  //     };
  //     fetchProducts();
  //   }
  // }, [categoryId]);

  const handleProductClick = (productId) => {
    router.push({
      pathname: '/productdetailpage',
      query: { productId: productId },
    });
  };

  const handleBackButton = () => {
    router.push('/publiccategories');
  };

  return (
    <div className="container mx-auto mt-4 mb-24 ml-52">
      <div className="row mb-12">
        <div className="col-12">
          <button
            type="button"
            className="btn btn-secondary top-right-button"
            onClick={handleBackButton}
          >
            Goto Back
          </button>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="row">
        {products.length ? (
          products.map((product) => (
            <div className="col-lg-3 col-md-4 mb-4" key={product.id}>
              <div className="card" onClick={() => handleProductClick(product.id)}>
                <img
                  src={`http://localhost:8000/${product.image}`}
                  className="card-img-top clickable-image"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
      {/* <CategoryVerticalSlider /> */}
    </div>
  );
};

export default CategoryWiseProductCom;
