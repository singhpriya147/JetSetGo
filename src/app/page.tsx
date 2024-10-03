'use client';
import { CalenderIcon } from '@/icons';
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
  const[isCalenderOpen,setIsCalenderOpen]=useState<boolean>(false);
const [departureDate, setDepartureDate] = useState<Date | undefined>(new Date());
// const [retrunDate, setReturnDate] = useState<Date | undefined>(new Date());
  useEffect(() => {
    const cityName = data.airports.map((airport) => airport.city);
    setCityList(cityName);
  }, []);

  const toggleCalneder=()=>{
    setIsCalenderOpen(!isCalenderOpen)
  }
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] border-2 border-black'>
      <h1 className='text-4xl'>Good AfterNoon ,Brian</h1>
      <div className='flex flex-row gap-2'>
        <SelectDemo label='where From?' city={cityList} />
        <SelectDemo label='where to?' city={cityList} />

        <div className='flex flex-row gap-2'>
          <Button variant='outline' onClick={toggleCalneder}>
            <CalenderIcon />
            Departure
          </Button>
          <Button variant='outline' onClick={toggleCalneder}>
            <CalenderIcon />
            Return
          </Button>
          {isCalenderOpen ? (
            <Calendar
              mode='single'
              selected={departureDate}
              onSelect={setDepartureDate}
              className='rounded-md border'
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}
