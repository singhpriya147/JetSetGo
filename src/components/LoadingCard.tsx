import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import image from '../app/images/de2e13b8b13ef90316e36338415b882b.gif'
import circularLoader from '../app/images/circularLoader.gif'
import { GreenCheck } from '@/icons';
const LoadingCard = () => {

  const [currentStep,setCurrentStep]=useState(0)


  useEffect(()=>{
    if(currentStep <3){
      const intervalId=setTimeout(()=>{
 setCurrentStep((prevStep) => prevStep + 1);
      },3000);

      return ()=>clearInterval(intervalId);
    }
  },[currentStep])
  return (
    <div className='h-80 w-80 bg-white rounded-xl flex flex-col justify-center items-center pb-3  border-size border-grey-400'>
      <Image
        src={image}
        width={150}
        height={150}
        alt='plane image'
        // className='absolute z-50'
      />
      <div>
        {/*  TODO : Decrease the side of circular Loader */}
        <ul className='flex gap-2 flex-col'>
          <li className='flex flex-row gap-2'>
            {currentStep >= 1 ? (
              <GreenCheck />
            ) : (
              <Image
                src={circularLoader}
                width={25}
                height={25}
                alt='circular loader'
              />
            )}
            <span>Searching 400+ flights</span>
          </li>
          <li className='flex flex-row gap-2'>
            {currentStep >= 2 ? (
              <GreenCheck />
            ) : (
              <Image
                src={circularLoader}
                width={25}
                height={25}
                alt='circular loader'
              />
            )}
            <span>Attaching Company Rules</span>
          </li>
          <li className='flex flex-row gap-2'>
            {currentStep >= 3 ? (
              <GreenCheck />
            ) : (
              <Image
                src={circularLoader}
                width={25}
                height={25}
                alt='circular loader'
              />
            )}
            <span>Serving best results</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LoadingCard


