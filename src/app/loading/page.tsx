
'use client';

import Header from '@/components/Header';
import Card from '@/components/Card';
import CardSkeleton from '@/components/CardSkeleton';
import { useEffect, useState } from 'react';
import LoadingCard from '@/components/LoadingCard';

import { useRouter } from 'next/navigation';


export default function LoadingPage() {
  // const { arrivalCity, departureCity } = useCityContext();
 const [loading, setLoading] = useState(true);
const router=useRouter();
 useEffect(() => {
   setTimeout(() => {
     setLoading(false);
       router.push('/result');
   }, 9000);
 
 }, []);
  return (
    <div>
      <Header />

     
      {loading ? (
        <div className='flex justify-center items-start'>
          <div className='absolute z-50 pt-4 '><LoadingCard/></div>
          <div>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </div>
      ) : (
        <>
          <Card />
          <Card />
          <Card />
          <Card />
        </>
      )}
    </div>
  );
}


