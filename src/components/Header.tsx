import React, { useState } from 'react'

import { useCityContext } from '@/app/context/context';
import Loader from './Loader';
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
        <div className='flex flex-row w-100 bg-white items-center justify-center   '>
          <BookingWidget />
          <CrossIcon
            onClick={handleCrossClick}
            style={{ height: 35, width: 35 }}
          />
        </div>
      ) : (
        <div className='h-[106px] bg-white w-3/4   mx-auto max-sm:text-sm max-sm:w-full flex justify-between items-center   '>
          <div className='h-12  bg-white rounded-full w-2/3  border-size  pl-2 pr-2 border-[##E6E8EB] flex flex-row justify-between items-center'>
            <div className=' pr-10 '>
              <span className='mr-3 font-bold accent-text'>
                {departureCity?.code}
              </span>
              {departureCity?.cityName}
            </div>
            <div className='w-0.5 h-10 bg-slate-200 rounded-sm'></div>
            <div>
              <span className='mr-3 font-bold accent-text'>
                {arrivalCity?.code}
              </span>
              {arrivalCity?.cityName}
            </div>
            <div className='w-0.5 h-10 bg-slate-200 rounded-md'></div>

            <div className='flex fel-row'>
              <span>
                {formatDate(departureDate)}-{formatDate(returnDate)}
              </span>
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

      {/* <Loader/> */}
    </div>
  );
}

export default Header