import React, { useState } from 'react'

import { useCityContext } from '@/app/context/context';

import { HeaderSerachIcon } from '@/icons';
import { CrossIcon } from '@/icons';
import BookingWidget from './BookingWidget';
const Header = () => {
 const { arrivalCity, departureCity, departureDate, returnDate } =
   useCityContext();
const[openBookingWidget,setOpenBookingWidget]=useState(false);

const toggleWidget=()=>{
  setOpenBookingWidget((prev)=>!prev);
}

const handleCrossClick = () => {
    setOpenBookingWidget(false); // Go back to JourneyTab view
};
 console.log("departure city in header",departureCity)
  console.log('arrival city in header', arrivalCity);
  console.log("departure date ",departureDate)
 const formatDate = (date: Date | null): string => {
   return date
     ? date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
     : 'Select Date';
 };





  return (
    <div>
      {openBookingWidget ? (
        <div className='flex flex-row w-100 bg-white items-center justify-center border-b-2 border-grey-100  '>
          <BookingWidget />
          <CrossIcon
            onClick={handleCrossClick}
            style={{ height: 35, width: 35 }}
          />
        </div>
      ) : (
        <div className='h-[106px] bg-white w-full flex justify-between items-center pl-28 pr-28 border-b-2 border-grey-100 '>
          <div className='h-12 bg-white rounded-full w-2/3 border-2 pl-5 pr-5 border-color flex flex-row justify-between items-center'>
            <div className=' pr-10'>
              <span className='mr-3 font-bold '>{departureCity?.code}</span>
              {departureCity?.cityName}
            </div>
            <div className='w-0.5 h-10 bg-slate-200 rounded-sm'></div>
            <div>
              <span className='mr-3 font-bold '>{arrivalCity?.code}</span>
              {arrivalCity?.cityName}
            </div>
            <div className='w-0.5 h-10 bg-slate-200 rounded-md'></div>

            <div className='flex fel-row'>
              <span>{formatDate(departureDate)}-{formatDate(returnDate)}</span>
            </div>
            <div className='w-0.5 h-10 bg-slate-200 rounded-sm'></div>
            <HeaderSerachIcon
              onClick={toggleWidget}
              style={{ height: 35, width: 35 }}
            />
          </div>

          <CrossIcon
            onClick={handleCrossClick}
            style={{ height: 35, width: 35 }}
          />
        </div>
      )}

      {/* <div className='h-[106px] bg-white w-full flex justify-between items-center pl-28 pr-28 border-b-2 border-grey-100 '>
        <div className='h-12 bg-white rounded-full w-2/3 border-2 border-black flex flex-row justify-between items-center'>
          <div className='border-r-2 border-solid border-gray-400 pr-10'>
            <span>{departureCity?.code}</span>
            {departureCity?.cityName}
          </div>

          <div>
            <span>{arrivalCity?.code}</span>
            {arrivalCity?.cityName}
          </div>
          <div className='flex fel-row'>
            <span>JUN 25- JUL6</span>
            <HeaderSerachIcon style={{ height: 35, width: 35 }} />
          </div>
        </div>

        <CrossIcon onClick={toggleWidget} />
      </div> */}
    </div>
  );
}

export default Header