//  This is Landing Page

import BookingWidget from "@/components/BookingWidget";

export default function Home() {

  return (
    <div className='  grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] border-2 border-black '>
      <h1 className='text-4xl'>Good AfterNoon ,Brian</h1>
      
      <div className='bg-white rounded-lg border-2 border-gray-300 h-52 w-100 flex  flex-col justify-center items-center '>
        <BookingWidget />
      </div>
    </div>
  );
}
