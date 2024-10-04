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
      <div className='flex justify-center items-center flex-col pt-6 gap-3'>
        <div onClick={toggleDetail}>
          <Card />
        </div>

        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default page