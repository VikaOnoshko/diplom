/// <reference types="vite/client" />

type WithChildren = {
  children: React.ReactNode;
};

type HomeBanner = {
  id: number;
  title: string;
  img: string;
  position: 'left' | 'right';
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
  favorite: boolean;
  top: boolean;
  rating: number;
  price: number;
};
