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
