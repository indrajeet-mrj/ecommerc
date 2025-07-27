import React from 'react'
import Title from '../components/Title'
import NewsLatterBox from '../components/NewsLatterBox'

import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
           <Title text1={'ABOUT'} text2={'US'}/>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
             <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
             <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                  <p>At Indrajeet, we believe shopping should be simple, enjoyable, and accessible for everyone. Founded with a passion for quality and a mission to deliver value, Indrajeet is your one-stop e-commerce platform offering a wide range of products across fashion, electronics, home essentials, accessories, and more.</p>
                  <p>To create a platform where people can shop with confidence and convenience. Whether you're looking for the latest trends, everyday essentials, or unique gifts, Indrajeet brings you top-quality products at affordable prices — all from the comfort of your home.</p>
                  <b className='text-gray-800'>Our Mission</b>
                  <p>We’re not just building a store — we’re building trust. At Indrajeet, customer satisfaction is at the heart of everything we do. From smooth navigation to transparent policies and attentive service, we’re here to make your online shopping experience better every day.</p>
             </div>
        </div>
        <div className='text-xl py-4'>
           <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>At Indrajeet, quality is not just a promise — it’s our foundation.We understand that when you shop online.</p>
           </div>
           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>At Indrajeet, your comfort and ease come first.We’ve designed every part of your shopping journey to be simple, fast.</p>
           </div>
           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>At Indrajeet, we don’t just deliver products — we deliver care.Your satisfaction is at the heart of everything we do.</p>
           </div>
        </div>

        <NewsLatterBox/>

    </div>
  )
}

export default About