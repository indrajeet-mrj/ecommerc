import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {

  const {productId} = useParams();
  const {products , currency ,addToCart} = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [image,setImage] = useState('');
  const [size,setSize] = useState('');

  const fatchProductData = async()=>{
     products.map((item)=>{

      if(item._id == productId){
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
       
     })
  }

  useEffect(()=>{
    fatchProductData();
  },[productId,products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* ProductData */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
         {/* ProdutImages */}
         <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
               {
                productData.image.map((item,index)=>(
                  <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                ))
               }
            </div>
            <div className='w-full sm:w-[80%]'>
               <img className='w-full h-auto' src={image} alt="" />
            </div>
         </div>
            
        {/* --------- Product Info-------- */}
        <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex item-center gap-1 mt-2'>
                <img src={assets.star_icon} alt="" className="w-6" />
                <img src={assets.star_icon} alt="" className="w-6" />
                <img src={assets.star_icon} alt="" className="w-6" />
                <img src={assets.star_icon} alt="" className="w-6" />
                <img src={assets.star_dull_icon} alt="" className="w-6" />
                <p className='pl-2'> (122) </p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
                <div className='flex gap-2'>
                   {productData.sizes.map((item,index)=>(
                    <button onClick={()=>setSize(item)} className={` border border-gray-200 py-2 px-4 bg-gray-100 cursor-pointer ${item === size ? 'border-orange-500':''}`} key={index}>{item}</button>
                   ))}
                </div>
            </div>
            <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5' />
            <div className='text-sm text-gray-500 mt-5 flex-col gap-1'>
                <p>100% Original product.</p>
                <p>Cash on delivery available on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
            </div>
        </div>
      </div>
      {/* ---------------- Description & Review Section -------------- */}
      <div className='mt-20'>
        <div className='flex'>
            <b className='border px-5 py-3 text-sm'>Description</b>
            <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
         <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
             <p>Our e-commerce website offers a seamless shopping experience with a wide range of high-quality products, secure payments, fast delivery, and 24/7 customer support—all from the comfort of your home.</p>
             <p>"Excellent shopping experience!"
               I recently ordered a few items from this website and was really impressed! The product quality was great, the checkout process was smooth, and the delivery was right on time. I also appreciated the quick response from customer support. Will definitely shop again!</p>
         </div>
      </div>

      {/* --------- Display  related Product --------------------- */}

      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
        

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product