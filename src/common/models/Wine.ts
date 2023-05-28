import { Country } from './Country';
import { WineRateDTO } from './Diary';
import { WineType } from './WineType';

export interface WineBaseInfo {
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

export interface WinePropertyInfo {
  minAlcohol?: number;
  maxAlcohol?: number;
  body?: number;
  tannins?: number;
  sweetness?: number;
  acidity?: number;
  order: number;
  searchable: boolean;
  maker: string;
  style: string | null;
  rating: string | null;
  ferment: string | null;
  minTemperature: number;
  maxTemperature: number;
  foods: string[];
  importer: string | null;
  kinds: {
    id: string;
    name: string;
  }[];
}

export interface WineDTO extends WineBaseInfo, WinePropertyInfo {}

export interface WineWithRatesDTO extends WineDTO {
  rates: WineRateDTO[];
}

export namespace Wine {
  export function getImage(data: WineBaseInfo) {
    return data.image
      ? { uri: data.image }
      : require('@assets/images/empty_wine.png');
  }
}
