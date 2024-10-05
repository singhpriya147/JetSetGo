

const CardSkeleton = () => {
  return (
   

    <div className='h-44 max-w-full bg-white border-size rounded-md border-color p-6 flex flex-col gap-4 min-w-[300px]'>
      <div className='flex flex-wrap gap-4'>
        <div className='h-[50px] w-[50px] bg-slate-300 animate-pulse rounded' />
        <div className='flex-1 flex flex-col gap-3'>
          <p className='w-full sm:w-40 h-3 rounded-sm bg-slate-300 animate-pulse'></p>
          <h3 className='w-full sm:w-32 h-3 rounded-sm bg-slate-300 animate-pulse'></h3>
        </div>
        <div className='flex-1 flex flex-col gap-3'>
          <p className='w-full sm:w-20 h-3 rounded-sm bg-slate-300 animate-pulse'></p>
          <h3 className='w-full sm:w-20 h-3 rounded-sm bg-slate-300 animate-pulse'></h3>
        </div>
        <div className='flex-1 flex flex-col gap-3'>
          <p className='w-full sm:w-36 h-3 rounded-sm bg-slate-300 animate-pulse'></p>
          <h2 className='w-full sm:w-24 h-3 rounded-sm bg-slate-300 animate-pulse'></h2>
        </div>
      </div>

      <div className='flex flex-wrap gap-4'>
        <div className='h-[50px] w-[50px] bg-slate-300 animate-pulse rounded' />
        <div className='flex-1 flex flex-col gap-3'>
          <p className='w-full sm:w-40 h-3 rounded-sm bg-slate-300 animate-pulse'></p>
          <h3 className='w-full sm:w-32 h-3 rounded-sm bg-slate-300 animate-pulse'></h3>
        </div>
        <div className='flex-1 flex flex-col gap-3'>
          <p className='w-full sm:w-20 h-3 rounded-sm bg-slate-300 animate-pulse'></p>
          <h3 className='w-full sm:w-20 h-3 rounded-sm bg-slate-300 animate-pulse'></h3>
        </div>
        <div className='flex-1 flex flex-col gap-3'>
          <p className='w-full sm:w-36 h-3 rounded-sm bg-slate-300 animate-pulse'></p>
          <h2 className='w-full sm:w-24 h-3 rounded-sm bg-slate-300 animate-pulse'></h2>
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton