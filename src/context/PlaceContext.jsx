import { createContext, useState } from 'react';

export const PlaceContext = createContext(null);

function PlaceContextProvider({ children }) {
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <PlaceContext.Provider value={{ places, setPlaces, isLoading, setIsLoading }}>{children}</PlaceContext.Provider>
  );
}

export default PlaceContextProvider;
