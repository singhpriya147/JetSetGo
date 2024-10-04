// // context/CityContext.tsx
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
}

// // Create the context
const CityContext = createContext<CityContextType | undefined>(undefined);

// // Create a provider component

export const CityProvider = ({ children }: { children: ReactNode }) => {
  const [departureCity, setDepartureCity] = useState<City | null>(null);
  const [arrivalCity, setArrivalCity] = useState<City | null>(null);

  const value = {
    departureCity,
    arrivalCity,
    setDepartureCity,
    setArrivalCity,
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



