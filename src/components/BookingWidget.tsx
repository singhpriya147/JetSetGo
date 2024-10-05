'use client';
import { CalenderIcon } from '@/icons';
import { SearchIcon } from '@/icons';
import { useRouter } from 'next/navigation';
import { useCityContext } from '@/app/context/context';
import { TwoWayArrow } from '@/icons';
import { LocationIcon } from '@/icons';
import { ReactNode } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
 
  SelectItem,
} from '@/components/ui/select';

import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import {data} from '../data/airport'
import { useEffect, useState } from 'react';

interface City {
  cityName: string;
  code: string;
}


export function SelectDemo({
  label,
  type,
  cityList,
  onCityChange,
}: {
  label: string| ReactNode;

  type: 'departure' | 'arrival';
  cityList: City[];
  onCityChange: (city: City, type: 'departure' | 'arrival') => void;
}) {
  const handleChange = (cityNameValue: string) => {
    const selectedCityObj = cityList.find(
      (item) => item.cityName === cityNameValue
    );
    if (selectedCityObj) {
      onCityChange(selectedCityObj, type);
    }
  };

  return (
    <Select onValueChange={handleChange} >
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {cityList.map((item, index) => (
            <SelectItem key={index} value={item.cityName}>
              {item.cityName}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}


const BookingWidget = () => {

const router = useRouter();

const [cityList, setCityList] = useState<City[]>([]);

const {
  arrivalCity,
  departureCity,
  setArrivalCity,
  setDepartureCity,
  departureDate,
  returnDate,
  setDepartureDate,
  setReturnDate,
} = useCityContext();

const [isDepartureOpen, setIsDepartureOpen] = useState<boolean>(false);
const [isreturnOpen, setIsReturnOpen] = useState<boolean>(false);




//  
  useEffect(() => {
    const cityName = data.airports.map((airport,index) => ({
      cityName: airport.city,
      code: airport.code,
      key:index,
    }));
    setCityList(cityName);
  }, []);
 const handleCityChange = (city: City, type: 'departure' | 'arrival') => {
   if (type === 'departure') {
     setDepartureCity(city);
   } else if (type === 'arrival') {
     setArrivalCity(city);
   }
 };

 const toggleDepartureCalender = () => {
   setIsDepartureOpen((prev) => !prev);
   setIsReturnOpen(false);
 };
 const toggleReturnCalender = () => {
   setIsReturnOpen((prev) => !prev);
   setIsDepartureOpen(false);
 };


 const formatDateForLabel=(date:Date | null):string=>{
return date ? date.toLocaleDateString('en-GB' ,{day:'2-digit',month:'2-digit',year:'numeric'}):'Select Date'
 };

 const handleSearchClick = () => {
   const selectedDepartureCity = departureCity;
   const selectedArrivalCity = arrivalCity; 
   if (!selectedDepartureCity || !selectedArrivalCity || !departureDate) {
     alert('Please select a departure city, arrival city, and departure date.');
     return; // Stop the function if validation fails
   }
   setDepartureCity(selectedDepartureCity);
   setArrivalCity(selectedArrivalCity);

  
   router.push('/loading');
 };


const handleDepartureDateSelection=()=>{

toggleDepartureCalender();


}


const handleReturnDateSelection = () => {
toggleReturnCalender();
};

  return (
    <div className=' flex  w-auto flex-col p-3 gap-6 '>
      <div className='bg-[#F5F7FA] w-24 text-center  rounded-md p-1 '>
        <span className='accent-text'>Flights</span>
      </div>
      <div></div>
      <div className='flex flex-row gap-2 items-center max-sm:flex-col'>
        {/* <LocationIcon /> */}
        <SelectDemo
          label={
            <span className='flex items-center'>
              <LocationIcon className='mr-2' />
              <span>
                {departureCity ? (
                  <span>{departureCity.cityName}</span>
                ) : (
                  'Where from?'
                )}
              </span>
            </span>
          }
          type='departure'
          cityList={cityList}
          onCityChange={handleCityChange}
        />
        <TwoWayArrow />
        <SelectDemo
          label={
            <span className='flex items-center'>
              <LocationIcon className='mr-2' />
              <span>
                {arrivalCity ? (
                  <span>{arrivalCity.cityName}</span>
                ) : (
                  'Where to?'
                )}
              </span>
            </span>
          }
          cityList={cityList}
          type='arrival'
          onCityChange={handleCityChange}
        />
        <div className='flex flex-row gap-2 max-sm:{flex-col pl-0}'>
          <div>
            <Button variant='outline' onClick={toggleDepartureCalender}>
              {departureDate ? (
                <div>
                  <span>Departure</span>
                  <div className='flex flex-row'>
                    <CalenderIcon className='mr-2' />
                    <span className='accent-text '>
                      {formatDateForLabel(departureDate)}
                    </span>
                  </div>
                </div>
              ) : (
                <>
                  <CalenderIcon className='mr-2' />
                  <p>Departure</p>
                </>
              )}
            </Button>

            {isDepartureOpen ? (
              <Calendar
                mode='single'
                selected={departureDate || new Date()}
                onSelect={(date) => setDepartureDate(date as Date | null)}
                onDayClick={handleDepartureDateSelection}
                className='rounded-md border absolute z-50 bg-white'
              />
            ) : (
              ''
            )}
          </div>
          <div>
            <Button variant='outline' onClick={toggleReturnCalender}>
             
              {returnDate ? (
                <div>
                  <span>Return</span>
                  <div className='flex flex-row'>
                    <CalenderIcon className='mr-2' />
                    <span className='accent-text '>
                      {formatDateForLabel(returnDate)}
                    </span>
                  </div>
                </div>
              ) : (
                <>
                  <CalenderIcon className='mr-2' />
                  <p>Return</p>
                </>
              )}
            </Button>
            {isreturnOpen ? (
              <Calendar
                mode='single'
                selected={returnDate || new Date()}
                onSelect={(date) => setReturnDate(date as Date | null)}
                onDayClick={handleReturnDateSelection}
                className='rounded-md border absolute bg-white'
               
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <div className='flex  justify-end max-sm:justify-center'>
        <Button
          onClick={handleSearchClick}
          style={{ background: '#003E39' }}
          className='flex gap-4 pl-8 pr-8'
        >
          <SearchIcon />
          Search Flights
        </Button>
      </div>
    </div>
    // </div>
  );
};

export default BookingWidget;
