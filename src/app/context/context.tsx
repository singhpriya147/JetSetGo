
"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';


interface City {
  cityName: string;
  code: string;
}

interface CityContextType {
  departureCity: City | null;
  arrivalCity: City | null;
  setDepartureCity: (city: City | null) => void;

  setArrivalCity: (city: City | null) => void;
  departureDate: Date | null;
  returnDate: Date | null;
  setDepartureDate: (date: Date | null) => void;
  setReturnDate:(date:Date |null)=>void;
}


const CityContext = createContext<CityContextType | undefined>(undefined);



export const CityProvider = ({ children }: { children: ReactNode }) => {
  const [departureCity, setDepartureCity] = useState<City | null>(null);
  const [arrivalCity, setArrivalCity] = useState<City | null>(null);
const [departureDate, setDepartureDate] = useState<Date | null>(null);
const [returnDate, setReturnDate] = useState<Date | null>(null);

  const value = {
    departureCity,
    arrivalCity,
    setDepartureCity,
    setArrivalCity,
     departureDate,
  returnDate,
  setDepartureDate,
  setReturnDate,

  };

  return (
    <CityContext.Provider
      value={value}
    >
      {children}
    </CityContext.Provider>
  );
};

// // Custom hook to use the context
export const useCityContext = () => {
  const context = useContext(CityContext);
  if (context === undefined) {
    throw new Error('useCityContext must be used within a CityProvider');
  }
  return context;
};





// 'use client';
// import React, {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   ReactNode,
// } from 'react';

// interface City {
//   cityName: string;
//   code: string;
// }

// interface CityContextType {
//   departureCity: City | null;
//   arrivalCity: City | null;
//   setDepartureCity: (city: City | null) => void;
//   setArrivalCity: (city: City | null) => void;
//   departureDate: Date | null;
//   returnDate: Date | null;
//   setDepartureDate: (date: Date | null) => void;
//   setReturnDate: (date: Date | null) => void;
// }

// const CityContext = createContext<CityContextType | undefined>(undefined);

// export const CityProvider = ({ children }: { children: ReactNode }) => {

//   const [departureCity, setDepartureCity] = useState<City | null>(() => {
//     const savedCity = localStorage.getItem('departureCity');
//     return savedCity ? JSON.parse(savedCity) : null;
//   });

//   const [arrivalCity, setArrivalCity] = useState<City | null>(() => {
//     const savedCity = localStorage.getItem('arrivalCity');
//     return savedCity ? JSON.parse(savedCity) : null;
//   });

//   const [departureDate, setDepartureDate] = useState<Date | null>(() => {
//     const savedDate = localStorage.getItem('departureDate');
//     return savedDate ? new Date(savedDate) : null;
//   });

//   const [returnDate, setReturnDate] = useState<Date | null>(() => {
//     const savedDate = localStorage.getItem('returnDate');
//     return savedDate ? new Date(savedDate) : null;
//   });

  
//   useEffect(() => {
//     if (departureCity) {
//       localStorage.setItem('departureCity', JSON.stringify(departureCity));
//     } else {
//       localStorage.removeItem('departureCity');
//     }
//   }, [departureCity]);

//   useEffect(() => {
//     if (arrivalCity) {
//       localStorage.setItem('arrivalCity', JSON.stringify(arrivalCity));
//     } else {
//       localStorage.removeItem('arrivalCity');
//     }
//   }, [arrivalCity]);

//   useEffect(() => {
//     if (departureDate) {
//       localStorage.setItem('departureDate', departureDate.toISOString());
//     } else {
//       localStorage.removeItem('departureDate');
//     }
//   }, [departureDate]);

//   useEffect(() => {
//     if (returnDate) {
//       localStorage.setItem('returnDate', returnDate.toISOString());
//     } else {
//       localStorage.removeItem('returnDate');
//     }
//   }, [returnDate]);

//   const value = {
//     departureCity,
//     arrivalCity,
//     setDepartureCity,
//     setArrivalCity,
//     departureDate,
//     returnDate,
//     setDepartureDate,
//     setReturnDate,
//   };

//   return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
// };


// export const useCityContext = () => {
//   const context = useContext(CityContext);
//   if (context === undefined) {
//     throw new Error('useCityContext must be used within a CityProvider');
//   }
//   return context;
// };
