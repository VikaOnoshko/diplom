/// <reference types="vite/client" />
type Id = string;
type IdObject = { _id: Id };

type WithChildren = {
  children: React.ReactNode;
};

type HomeBanner = IdObject & {
  img: string;
};

type ForClient = IdObject & {
  img: string;
  title: string;
  description: string;
};

type Product = IdObject & {
  name: string;
  img: string;
  sale?: number;
  onSale: boolean;
  favorite: boolean;
  top: boolean;
  rating: number;
  price: number;
  isPresent: boolean;
};

type ItemAndCount<T> = {
  item: T;
  count: number;
};

type News = IdObject & {
  img: string;
  title: string;
  text: string;
};

type PaginationResponse<T> = {
  items: T[];
  count: number;
};

type GroupCategory = IdObject & {
  name: string;
};

type Category = IdObject & {
  name: string;
  img: string;
  groupId: number;
};

type Order = IdObject & {
  userId: string;
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
  products?: ItemAndCount<Product>[];
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

type Cart = IdObject & {
  products: ItemAndCount<Product>[];
  userId: string;
};
type CreateCart = Pick<Cart, 'products' | 'userId'>;
