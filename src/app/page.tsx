'use client';
import { CalenderIcon } from '@/icons';
import { SearchIcon } from '@/icons';
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

import { data } from '../data/airport';
import { useEffect, useState } from 'react';

export function SelectDemo({label,city}:{city:string[],label:string}) {
  
  return (
    <Select>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          

          {city.map((item,index) => (
            <SelectItem key={index} value={item}>{item}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default function Home() {

  const [cityList, setCityList] = useState<string[]>([]);
  const[depatureCity,setDepartureCity]=useState({})
  const[arrivalCity,setArrivalCity]=useState({})

  const [isDepartureOpen, setIsDepartureOpen] = useState<boolean>(false);
    const [isreturnOpen, setIsReturnOpen] = useState<boolean>(false);

const [departureDate, setDepartureDate] = useState<Date | null>(null);
const [returnDate, setReturnDate] = useState<Date | null>(null);

  useEffect(() => {
    const cityName = data.airports.map((airport) => airport.city);
    setCityList(cityName);
  }, []);

  const toggleDepartureCalender=()=>{
    setIsDepartureOpen((prev) => !prev);
     setIsReturnOpen(false); 
  }
   const toggleReturnCalender = () => {
     setIsReturnOpen((prev) => !prev);
         setIsDepartureOpen(false); 
   };



   const formatDate=(date:Date | null ):string=>{
return date
  ? date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  : 'Select Date'; 
   }
 
  return (
    <div className='  grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] border-2 border-black '>
      <h1 className='text-4xl'>Good AfterNoon ,Brian</h1>
      <div className='flex flex-row gap-2'>
        <SelectDemo label='where From?' city={cityList} />
        <SelectDemo label='where to?' city={cityList} />

        <div className='flex flex-row gap-2'>
          <div>
            <Button variant='outline' onClick={toggleDepartureCalender}>
              <CalenderIcon />
              {departureDate ? formatDate(departureDate) : 'Departure'}
            </Button>

            {isDepartureOpen ? (
              <Calendar
                mode='single'
                selected={departureDate || new Date()}
                onSelect={(date) => setDepartureDate(date as Date | null)}
                className='rounded-md border'
              />
            ) : (
              ''
            )}
          </div>
          <div>
            <Button variant='outline' onClick={toggleReturnCalender}>
              <CalenderIcon />
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
        <Button>
          <SearchIcon />
          Search Flights
        </Button>
      </div>
    </div>
  );
}
