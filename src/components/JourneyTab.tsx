// import { useCityContext } from '@/app/context/context';

// import { HeaderSerachIcon } from '@/icons';
// import { CrossIcon } from '@/icons';
// const JourneyTab = () => {
//   const { arrivalCity, departureCity } = useCityContext();

//   console.log('departure city in header', departureCity);
//   console.log('arrival city in header', arrivalCity);
//   return (
//     <div>
//       <div className='h-[106px] bg-white w-full flex justify-between items-center pl-28 pr-28 border-b-2 border-grey-100 '>
//         <div className='h-12 bg-white rounded-full w-2/3 border-2 border-black flex flex-row justify-between items-center'>
//           <div className='border-r-2 border-solid  border-gray-400 pr-10'>
//             <span className='accent-text'>{departureCity?.code}</span>
//             {departureCity?.cityName}
//           </div>

//           <div>
//             <span className='accent-text'>{arrivalCity?.code}</span>
//             {arrivalCity?.cityName}
//           </div>
//           <div className='flex fel-row'>
//             <span>JUN 25- JUL6</span>
//             <HeaderSerachIcon style={{ height: 35, width: 35 }} />
//           </div>
//         </div>

//         <CrossIcon />
//       </div>
//     </div>
//   );
// };

// export default JourneyTab;
