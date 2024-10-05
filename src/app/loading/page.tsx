
'use client';

import Header from '@/components/Header';
import Card from '@/components/Card';
import CardSkeleton from '@/components/CardSkeleton';
import { useEffect, useState } from 'react';
import LoadingCard from '@/components/LoadingCard';
import Loader from '@/components/Loader';
import { useRouter } from 'next/navigation';


export default function LoadingPage() {

 const [loading, setLoading] = useState(true);
const router=useRouter();
 useEffect(() => {
   setTimeout(() => {
     setLoading(false);
       router.push('/result');
   }, 9000);
 
 }, [router]);
  return (
    <div>
      <Header />
      <Loader />
      {loading ? (
        <div className='flex justify-center items-start'>
          <div className='absolute z-50 pt-4 '>
            <LoadingCard />
          </div>
          <div className='w-3/4 mx-auto flex flex-col gap-5 p-3 '>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </div>
      ) : (
        <div className='flex justify-center items-start'>
          <div className='w-3/4 mx-auto flex flex-col gap-5 p-3 '>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      )}
    </div>
  );
}


