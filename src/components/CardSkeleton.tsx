

const CardSkeleton = () => {
  return (
    <div className='h-44 w-[1056px] bg-white  border-size rounded-md border-color p-9  flex flex-col gap-4 '>
      <div className='flex flex-row gap-2'>
        <div className='h-[50px] w-[50px] bg-slate-300 animate-pulse rounded' />
        <div className='pr-52 flex flex-col gap-3'>
          <p className='w-40 h-3 rounded-sm  bg-slate-300 animate-pulse'></p>
          <h3 className='w-32 h-3 rounded-sm  bg-slate-300 animate-pulse'></h3>
        </div>
        <div className='w-56 flex flex-col gap-3'>
          <p className='w-20 h-3 rounded-sm  bg-slate-300 animate-pulse'></p>
          <h3 className='w-20 h-3 rounded-sm  bg-slate-300 animate-pulse'></h3>
        </div>
        <div className='flex flex-col gap-3'>
          <p className='w-36 h-3 rounded-sm  bg-slate-300 animate-pulse'></p>
          <h2 className='w-24 h-3 rounded-sm  bg-slate-300 animate-pulse'></h2>
        </div>
      </div>

      <div className='flex flex-row gap-2'>
        <div className='h-[50px] w-[50px] bg-slate-300 animate-pulse rounded' />
        <div className='pr-52 flex flex-col gap-3'>
          <p className='w-40 h-3 rounded-sm  bg-slate-300 animate-pulse'></p>
          <h3 className='w-32 h-3 rounded-sm  bg-slate-300 animate-pulse'></h3>
        </div>
        <div className='w-56 flex flex-col gap-3'>
          <p className='w-20 h-3 rounded-sm  bg-slate-300 animate-pulse'></p>
          <h3 className='w-20 h-3 rounded-sm  bg-slate-300 animate-pulse'></h3>
        </div>
        <div className='flex flex-col gap-3'>
          <p className='w-36 h-3 rounded-sm  bg-slate-300 animate-pulse'></p>
          <h2 className='w-24 h-3 rounded-sm  bg-slate-300 animate-pulse'></h2>
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton