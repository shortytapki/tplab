import { Product } from '../../Models/Product';
import { createAction } from '../createAction';
import { ProductsActionTypes } from './productsActionTypes';

export const setAll = (payload: {
  all: Array<Product>;
  persistedPage: number;
  persistedSortedElements: Array<Product>;
}) => createAction(ProductsActionTypes.SET_ALL, payload);

export const goToPage = (payload: number) =>
  createAction(ProductsActionTypes.SWITCH_PAGE, payload);

export const changeShowOption = (payload: number) =>
  createAction(ProductsActionTypes.CHANGE_SHOW_OPTION, payload);

export const switchPageByArrow = (payload: number) =>
  createAction(ProductsActionTypes.SWITCH_PAGE_ARROW, payload);

export const filterItems = (payload: Array<Product>) =>
  createAction(ProductsActionTypes.SEARCH, payload);

export const sortByName = () =>
  createAction(ProductsActionTypes.SORT_BY_NAME, 1);

export const sortByViews = () =>
  createAction(ProductsActionTypes.SORT_BY_VIEWS, 1);

export const sortByTheStartDate = () =>
  createAction(ProductsActionTypes.SORT_BY_THE_START_DATE, 1);

export const sortByTheEndDate = () =>
  createAction(ProductsActionTypes.SORT_BY_THE_END_DATE, 1);

export const sortByRating = () =>
  createAction(ProductsActionTypes.SORT_BY_RATING, 1);

export const resetFilters = () =>
  createAction(ProductsActionTypes.RESET_FILTERS, null);

export const changeOrder = (payload: boolean) =>
  createAction(ProductsActionTypes.CHANGE_ORDER, payload);

export const changeLanguage = (language: 'ru-RU' | 'en-US') =>
  createAction(ProductsActionTypes.CHANGE_LANGUAGE, language);
