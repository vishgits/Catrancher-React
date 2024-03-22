import { useState } from "react";
import { SystemContext } from "./SystemContext";
import {  PromiseErrorType, LocationType } from "../../interface";

export const SystemProvider = ({ children }: { children: React.ReactNode }) => {
  const [location] = useState<LocationType|null>({ page: 'HOME'});
  const [loading, setloading] = useState(false);
  const [error, setError] = useState<PromiseErrorType | null>(null);
  const [catValue, setCatValue] = useState<any | null>(null);
  const [selectedCats, setSelectedCats] = useState<any | null>([]);
  const [showModal, setshowModal] = useState(false);
  const [validClowders, setvalidClowders] = useState<any | null>([]);


  return (
    <SystemContext.Provider
      value={{
        location,
        loading,
        setloading,
        catValue,
        setCatValue,
        error,
        setError,
        selectedCats,
        setSelectedCats,
        showModal,
        setshowModal,
        validClowders,
        setvalidClowders
      }}
    >
      {children}
    </SystemContext.Provider>
  );
};
