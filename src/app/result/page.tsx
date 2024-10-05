'use client'
import Header from '@/components/Header';
import Card from '@/components/Card';
import { useState } from 'react';
import FlightDetail from '@/components/FlightDetail';




const ResultPage = () => {


const [detail,setDetail]=useState(false);

const toggleDetail=()=>{
 setDetail((prev) => !prev);
}



  return (
    <div>
      {detail ? (
        <div >
          {' '}
          <FlightDetail detail={detail} setDetail={setDetail} />
        </div>
      ) : (
       <></>
      )}
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

export default ResultPage;