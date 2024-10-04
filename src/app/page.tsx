//  This is Landing Page

import BookingWidget from "@/components/BookingWidget";

export default function Home() {

  return (
    <div className='  grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20  font-[family-name:var(--font-geist-sans)] border-size border-black '>
      <h1 className='text-4xl max-sm:text-xl'>Good AfterNoon ,Brian</h1>

      <div className='bg-white rounded-lg border-size shadow-sm border-gray-300 h-auto flex min-w-80 flex-col justify-center items-center '>
        <BookingWidget />
      </div>
    </div>
  );
}
