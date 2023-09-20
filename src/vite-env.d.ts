/// <reference types="vite/client" />

type WithChildren = {
  children: React.ReactNode;
};

type HomeBanner = {
  id: number;
  img: string;
};

type ForClient = {
  id: number;
  img: string;
  title: string;
  description: string;
};

type Product = {
  id: number;
  name: string;
  img: string;
  sale?: number;
  onSale: boolean;
  favorite: boolean;
  top: boolean;
  rating: number;
  price: number;
  category: string;
};

type News = {
  id: number;
  img: string;
  title: string;
  text: string;
};

type PaginationResponse<T> = {
  items: T[];
  count: number;
};

type GroupCategory = {
  id: number;
  name: string;
};

type Category = {
  id: number;
  name: string;
  img: string;
  groupCategoryId: number;
};
