import { createContext, ReactNode, useContext, useRef } from 'react';
import axios, { AxiosInstance } from 'axios';

axios.defaults.paramsSerializer = {
  indexes: null,
};

const AxiosContext = createContext<AxiosInstance>(
  axios.create({
    baseURL: '',
  })
);

interface AxiosProviderProps {
  children: ReactNode;
}

export const AxiosProvider = ({ children }: AxiosProviderProps) => {
  const axiosRef = useRef(
    axios.create({
      baseURL: '',
    })
  );

  return (
    <AxiosContext.Provider value={axiosRef.current}>
      {children}
    </AxiosContext.Provider>
  );
};

export const useAxios = () => useContext(AxiosContext);

export default AxiosContext;
