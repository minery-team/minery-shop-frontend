export interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  content: string;
  images?: string[];
}