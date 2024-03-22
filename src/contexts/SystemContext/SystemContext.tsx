import { createContext, Dispatch, SetStateAction } from "react";

import { FormType, PromiseErrorType, LocationType } from "../../interface";

interface SystemContextValue {
    location: LocationType |null;
    loading:boolean;
    setloading:Dispatch<SetStateAction<boolean>>;
    setError:Dispatch<SetStateAction<PromiseErrorType | null>>;
    error:PromiseErrorType | null;
    catValue: any | null;
    setCatValue:Dispatch<SetStateAction<FormType | null>>;
    selectedCats: any | null;
    setSelectedCats:Dispatch<SetStateAction<any | null>>;
    showModal:boolean,
    setshowModal:Dispatch<SetStateAction<boolean>>;
    validClowders:any | null;
    setvalidClowders:Dispatch<SetStateAction<any | null>>;
}


export const SystemContext = createContext<SystemContextValue>({
    location: null,
    loading: false,
    setloading: () => {},
    setError: () => {},
    error: null,
    catValue:[],
    setCatValue: () => {},
    selectedCats:[],
    setSelectedCats: () => {},
    showModal: false,
    setshowModal: () => {},
    validClowders:[],
    setvalidClowders: () => {},
  });