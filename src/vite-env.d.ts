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

type ItemAndCount<T> = {
  item: T;
  count: number;
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

type Order = {
  recipient: {
    name: string;
    telephone: string;
    date: Date | null;
    region: string;
    adress: string;
    time: string;
  };
  sender: {
    name: string;
    telephone: string;
    email: string;
  };
  delivery: {
    isSurprice: boolean;
    isPhoto: boolean;
    isVase: boolean;
    isNotify: boolean;
    isPostcard: boolean;
    isBusinessCard: boolean;
    isPayPostcard: boolean;
    postcardType: string;
    postcardText: string;
  };
};

type Currency = {
  name: string;
  rate: number;
};

type NBCurrency = {
  Cur_ID: number;
  Date: string;
  Cur_Abbreviation: string;
  Cur_Scale: number;
  Cur_Name: string;
  Cur_OfficialRate: number;
};
