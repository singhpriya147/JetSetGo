// 'use client';
// import { CalenderIcon } from '@/icons';
// import { SearchIcon } from '@/icons';
// import { useRouter } from 'next/navigation';
// import { useCityContext } from './context/context';
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectGroup,
//   // SelectLabel,
//   SelectItem,
// } from '@/components/ui/select';

// import { Calendar } from '@/components/ui/calendar';
// import { Button } from '@/components/ui/button';

// import { data } from '../data/airport';
// import { useEffect, useState } from 'react';

// interface City {
//   cityName: string; 
//   code: string; 
// }

// export function SelectDemo({
//   label,
//   type,
//   cityList,
//   onCityChange,
// }: {
//   label: string;

//   type: 'departure' | 'arrival';
//   cityList: City[];
//   onCityChange: (city: City, type: 'departure' | 'arrival') => void;
// }) {
//   const handleChange = (cityNameValue: string) => {
//     const selectedCityObj = cityList.find(
//       (item) => item.cityName === cityNameValue
//     );
//     if (selectedCityObj) {
     
//       onCityChange(selectedCityObj, type);
     
      
//     }
//   };

  

//   return (
//     <Select onValueChange={handleChange}>
//       <SelectTrigger className='w-[180px]'>
//         <SelectValue placeholder={label} />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectGroup>
//           {cityList.map((item, index) => (
//             <SelectItem key={index} value={item.cityName}>
//               {item.cityName}
//             </SelectItem>
//           ))}
//         </SelectGroup>
//       </SelectContent>
//     </Select>
//   );
// }

import BookingWidget from "@/components/BookingWidget";

export default function Home() {
//   const router = useRouter();
  
//     const [cityList, setCityList] = useState<City[]>([]);


// const {arrivalCity,departureCity,setArrivalCity,setDepartureCity}=useCityContext()

//   const [isDepartureOpen, setIsDepartureOpen] = useState<boolean>(false);
//     const [isreturnOpen, setIsReturnOpen] = useState<boolean>(false);

// const [departureDate, setDepartureDate] = useState<Date | null>(null);
// const [returnDate, setReturnDate] = useState<Date | null>(null);





//   useEffect(() => {
//  const cityName=data.airports.map((airport)=>(
//   {
// cityName:airport.city,
// code:airport.code
//  }

//  ))
//     setCityList(cityName);
//   }, []);

 
//  const handleCityChange = (city: City, type: 'departure' | 'arrival') => {
//    if (type === 'departure') {
//      setDepartureCity(city);
//    } else if (type === 'arrival') {
//      setArrivalCity(city);
//    }
//  };





//   const toggleDepartureCalender=()=>{
//     setIsDepartureOpen((prev) => !prev);
//      setIsReturnOpen(false); 
//   }
//    const toggleReturnCalender = () => {
//      setIsReturnOpen((prev) => !prev);
//          setIsDepartureOpen(false); 
//    };



//    const formatDate=(date:Date | null ):string=>{
// return date
//   ? date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
//   : 'Select Date'; 
//    }

  //  const handleSearchClick = () => {
  //   const selectedDepartureCity = departureCity; // Assuming you lift this state or access it from context
  //   const selectedArrivalCity = arrivalCity; // Assuming you lift this state or access it from context

  //   // Optionally, set these values in context if needed
  //   setDepartureCity(selectedDepartureCity);
  //   setArrivalCity(selectedArrivalCity);

  //   // Navigate to the loading page
  //   router.push('/loading');
  //  };
 
  return (
    <div className='  grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] border-2 border-black '>
      <h1 className='text-4xl'>Good AfterNoon ,Brian</h1>
      {/* <div className='flex flex-row gap-2'>
        <SelectDemo
          label='where From?'
          type='departure'
          cityList={cityList}
          onCityChange={handleCityChange}
        />
        <SelectDemo
          label='where to?'
          cityList={cityList}
          type='arrival'
          onCityChange={handleCityChange}
        />

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
        
        <Button onClick={handleSearchClick}>
          <SearchIcon />
          Search Flights
        </Button>
      </div> */}

<BookingWidget/>

    </div>
  );
}
