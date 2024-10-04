'use client'
import Header from '@/components/Header';
import Card from '@/components/Card';
const page = () => {


  return (
    <div>
      <Header />
      <div className='flex justify-center items-center flex-col pt-6 gap-3'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default page