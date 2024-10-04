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
  // SelectLabel,
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
    <Select onValueChange={handleChange}>
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

// const [departureDate, setDepartureDate] = useState<Date | null>(null);
// const [returnDate, setReturnDate] = useState<Date | null>(null);



  useEffect(() => {
    const cityName = data.airports.map((airport) => ({
      cityName: airport.city,
      code: airport.code,
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

 const formatDate = (date: Date | null): string => {
   return date
     ? date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
     : 'Select Date';
 };
 const formatDateForLabel=(date:Date | null):string=>{
return date ? date.toLocaleDateString('en-GB' ,{day:'2-digit',month:'2-digit',year:'numeric'}):'Select Date'
 };

 const handleSearchClick = () => {
   const selectedDepartureCity = departureCity;
   const selectedArrivalCity = arrivalCity; 
   
   setDepartureCity(selectedDepartureCity);
   setArrivalCity(selectedArrivalCity);

  
   router.push('/loading');
 };



  return (
    <div className=' flex  flex-col p-3 gap-6 '>
      <div className='bg-[#F5F7FA] w-24 text-center rounded-md p-1 '>
        <span>Flights</span>
      </div>
      <div className='flex flex-row gap-2 items-center'>
        {/* <LocationIcon /> */}
        <SelectDemo
          label={
            <span className='flex items-center'>
              <LocationIcon className='mr-2' />
              Where from?
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
              Where to?
            </span>
          }
          cityList={cityList}
          type='arrival'
          onCityChange={handleCityChange}
        />
        <div className='flex flex-row gap-2 pl-6'>
          <div>
            <Button variant='outline' onClick={toggleDepartureCalender}>
        
              {departureDate ? (
                <div >
                  <span>Departure</span>
                  <div className='flex flex-row'>
                    <CalenderIcon className='mr-2' />
                    {formatDateForLabel(departureDate)}
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
                className='rounded-md border absolute z-50 bg-white'
              />
            ) : (
              ''
            )}
          </div>
          <div>
            <Button variant='outline' onClick={toggleReturnCalender}>
              {/* <CalenderIcon className='mr-2' /> */}
              {returnDate ? (
                <div>
                  <span>Return</span>
                  <div className='flex flex-row'>
                    <CalenderIcon className='mr-2' />
                    {formatDateForLabel(returnDate)}
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
                className='rounded-md border absolute bg-white'
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <div className='flex  justify-end'>
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
