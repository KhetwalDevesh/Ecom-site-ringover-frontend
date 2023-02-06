import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import  useStore  from '../globalStore';
import Cart from './Cart';
const baseURL = "https://ecom-sql-backend.onrender.com/api/products/allProducts";
const ProductDetails = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useStore();
  const [productDetail, setProductDetail] = useState();
  const params = useParams();
  console.log(params.id);
  const addItemToCartLocal = () => {
    addItemToCart({ item: productDetail });
  };

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const productData = await axios.get(`${baseURL}/${params.id}`);
        setProductDetail(productData.data);
        console.log(productDetail)
      } catch (error) {
        console.log(error);
      }
    };
    getProductDetails();
  }, [params.id]);
  // console.log(productDetail);
  console.log(cartItems);
  if (productDetail === undefined) return <div>Loading...</div>;
  return (
    <div className="product-detail-in-store">
      <div className="product-detail">
        <img
          src={productDetail.image}
          className="product-detail-image"
          width="400px"
          height="400px"
        />
        <div className="pd-name-brand-out">
          <div className="pd-name-brand-in">
            <span>{productDetail.name}</span>
            <span>-</span>
            <span>{productDetail.brand}</span>
          </div>
          <div className="pd-price-out">
            <span className="pd-price-in">Rs.{productDetail.price}</span>
          </div>
          <button
            onClick={addItemToCartLocal}
            className="add-item-to-cart-btn"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Cart/>
    </div>
  );
};

export default ProductDetails;