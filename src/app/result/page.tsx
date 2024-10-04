'use client'
import Header from '@/components/Header';
import Card from '@/components/Card';
import { useState } from 'react';
import FlightDetail from '@/components/FlightDetail';
const page = () => {
const [detail ,setdetail]=useState(false);

const toggleDetail=()=>{
 setdetail((prev) => !prev);
}



  return (
    <div>
      {detail ? <FlightDetail detail={detail} setdetail={setdetail} /> : ' '}
      <Header />
      <div className='h-[1px] bg-[#E6E8EB] '></div>
      <div className='flex justify-center items-center flex-col pt-6 gap-3 '>
        <div onClick={toggleDetail} className='w-3/4'>
          <Card />
        </div>
        <div onClick={toggleDetail} className='w-3/4'>
          <Card />
        </div>
        <div onClick={toggleDetail} className='w-3/4'>
          <Card />
        </div>
        <div onClick={toggleDetail} className='w-3/4'>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default page