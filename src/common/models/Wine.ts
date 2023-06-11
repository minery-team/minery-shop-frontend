import { Country } from './Country';
import { WineType } from './WineType';

export interface Wine {
  id: number;
  _id: number;
  name: string;
  enName: string;
  image?: string;
  rate?: number;
  type: WineType;
  country?: Country;
  price?: number;
}
