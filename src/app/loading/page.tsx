
'use client';

import Header from '@/components/Header';

// import { useEffect } from 'react';
export default function LoadingPage() {
  // const { arrivalCity, departureCity } = useCityContext();

  return (
    <div>
      <Header /> {/* Now it has context access */}
      <h2>Loading...</h2>
      {/* <p>Departure City: {departureCity?.cityName}</p>
      <p>Arrival City: {arrivalCity?.cityName}</p> */}
    </div>
  );
}


