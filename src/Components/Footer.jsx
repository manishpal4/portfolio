import React from 'react';
import profile from "../assets/profile.jpg";
import { IoIosMail } from "react-icons/io";


function Footer() {
    function onClickHandler(){
        <a href="mailto:manish3upal@gmail.com"></a>
    }
   
  return (
    <>
    <div className='p-10 gap-5 landscape:p-10 landscape:justify-around landscape:flex landscape:items-center '>
      <div className='flex pt-9 mb-7'>
        <img className='rounded-full h-14 w-14' src={profile} alt="Profile" />
        <div className='px-4'>
          <h1 className='text-white text-2xl'>Manish Kumar</h1>
          <p className='text-white/30'>Creator | Learner</p>
        </div>
      </div>
      <hr className=' bg-white/30' />


      <div className=' bg-black overflow-hidden w-200 h-200 rounded-xl text-white py-10'>
        <h1 className=' my-1 text-6xl'>
            Let's talk
        </h1>
        <p>
            I would love to hear your thoughts.
        </p>

        <button onClick={onClickHandler} className='bg-orange-600 gap-2 p-1 px-3 flex rounded-xl mt-4 text-xl'>
         <span className='text-3xl '><IoIosMail /></span>   mail me
        </button>

      </div>
      <hr className=' bg-white/30' />

      <div>
        <iframe 
          className='rounded-xl my-10 w-40 ' 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27597.978325222844!2d76.84937031567785!3d30.158640248197134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e4a4b98404f57%3A0x75ffae70833e8448!2sShahbad%2C%20Haryana%20136135!5e0!3m2!1sen!2sin!4v1728035948030!5m2!1sen!2sin" 
         
          style={{border:"0"}} 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      
      
    </div>
    <div className='text-white'>
    <p className='mx-10 pb-4'>copyright @manishkumar, all right reserved</p>
  </div>
  </>
  );
}

export default Footer;
