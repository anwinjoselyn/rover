import { useContext, createContext } from "react";

type TRover = {
  cameras: string[];
  id: number;
  landing_date: string;
  launch_date: string;
  max_date: string;
  max_sol: number;
  name: string;
  status: string;
  total_photos: number;
};

interface IRover {
  rovers: TRover[];
  setRovers: Function;
}
/*
interface IRoverObj {
  rover: TRover;
  setRover: Function;
}
*/
export const AppContext = createContext<IRover>({
  rovers: [],
  setRovers: () => null
});
/*
export const RoverContext = createContext<IRoverObj>({
  rover: {},
  setRover: () => null
});
*/
export function useAppContext() {
  return useContext(AppContext);
}
