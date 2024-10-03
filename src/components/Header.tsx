import React from 'react'
import { SearchIcon } from '@/icons';
const Header = () => {
  return (
    <div className='h-[106px] bg-slate-200 w-full flex justify-between items-center pl-28 pr-28 '>
      <div className='h-12 bg-white rounded-full w-2/3 border-2 border-black'>
      
      
      </div>
      <SearchIcon style={{ color: 'black' }} />

    </div>
  );
}

export default Header