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

const { arrivalCity, departureCity, setArrivalCity, setDepartureCity } =
  useCityContext();

const [isDepartureOpen, setIsDepartureOpen] = useState<boolean>(false);
const [isreturnOpen, setIsReturnOpen] = useState<boolean>(false);

const [departureDate, setDepartureDate] = useState<Date | null>(null);
const [returnDate, setReturnDate] = useState<Date | null>(null);



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

 const handleSearchClick = () => {
   const selectedDepartureCity = departureCity; // Assuming you lift this state or access it from context
   const selectedArrivalCity = arrivalCity; // Assuming you lift this state or access it from context

   // Optionally, set these values in context if needed
   setDepartureCity(selectedDepartureCity);
   setArrivalCity(selectedArrivalCity);

   // Navigate to the loading page
   router.push('/loading');
 };
  return (
    <div className='bg-white rounded-lg border-2 border-gray-300 h-52 w-2/3 flex  flex-col p-5 gap-8'>
      <div className='bg-gray-200 w-24 text-center rounded-md p-1'>
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
              <CalenderIcon className='mr-2' />
              {departureDate ? formatDate(departureDate) : 'Departure'}
            </Button>

            {isDepartureOpen ? (
              <Calendar
                mode='single'
                selected={departureDate || new Date()}
                onSelect={(date) => setDepartureDate(date as Date | null)}
                className='rounded-md border '
              />
            ) : (
              ''
            )}
          </div>
          <div>
            <Button variant='outline' onClick={toggleReturnCalender}>
              <CalenderIcon className='mr-2' />
              {returnDate ? formatDate(returnDate) : 'Return'}
            </Button>
            {isreturnOpen ? (
              <Calendar
                mode='single'
                selected={returnDate || new Date()}
                onSelect={(date) => setReturnDate(date as Date | null)}
                className='rounded-md border'
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <div className='flex  justify-end'>
        <Button onClick={handleSearchClick} style={{background: '#003E39'
}} className='flex gap-4 pl-8 pr-8'>
          <SearchIcon />
          Search Flights
        </Button>
      </div>
    </div>
  );
};

export default BookingWidget;
