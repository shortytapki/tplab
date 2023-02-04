import { Product } from './Product';

type SortParams = {
  sortedByName: boolean;
  sortedByViews: boolean;
  sortedByTheStartDate: boolean;
  sortedByTheEndDate: boolean;
  sortedByRating: boolean;
  descendingOrder: boolean;
};

export type ProductsState = {
  all: Array<Product>;
  sortedProducts: Array<Product>;
  loading: boolean;
  currentPage: number;
  showOption: number;
  sortParams: SortParams;
  language: 'ru-RU' | 'en-US';
};

export type RootState = {
  products: ProductsState;
};
