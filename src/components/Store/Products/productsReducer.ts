import { Product } from '../../Models/Product';
import { ProductsState } from '../../Models/State';
import { ProductsActionTypes } from './productsActionTypes';

const sortParams = {
  sortedByName: false,
  sortedByViews: false,
  sortedByTheStartDate: false,
  sortedByTheEndDate: false,
  sortedByRating: false,
  descendingOrder: true,
};

const INITIAL_STATE: ProductsState = {
  all: [],
  loading: true,
  sortedProducts: [],
  currentPage: 1,
  showOption: 3,
  sortParams: sortParams,
  language: 'ru-RU',
};

export const productsReducer = (
  state = INITIAL_STATE,
  action: any
): ProductsState => {
  const type = action.type;
  const payload = action.payload;

  const sortByName = (arr: Array<Product>, descendingOrder: boolean) =>
    arr.sort((a, b) => {
      const cond = descendingOrder
        ? a.name.toLowerCase() > b.name.toLowerCase()
        : a.name.toLowerCase() < b.name.toLowerCase();
      return cond ? -1 : 1;
    });

  const sortByViews = (arr: Array<Product>, descendingOrder: boolean) =>
    arr.sort((a, b) =>
      descendingOrder ? b.views - a.views : a.views - b.views
    );

  const sortByTheStartDate = (arr: Array<Product>, descendingOrder: boolean) =>
    arr.sort((a, b) =>
      descendingOrder
        ? new Date(b.start_date).getTime() / 1000 -
          new Date(a.start_date).getTime() / 1000
        : new Date(a.start_date).getTime() / 1000 -
          new Date(b.start_date).getTime() / 1000
    );

  const sortByTheEndDate = (arr: Array<Product>, descendingOrder: boolean) =>
    arr.sort((a, b) =>
      descendingOrder
        ? new Date(b.end_date).getTime() / 1000 -
          new Date(a.end_date).getTime() / 1000
        : new Date(a.end_date).getTime() / 1000 -
          new Date(b.end_date).getTime() / 1000
    );

  const sortByRating = (arr: Array<Product>, descendingOrder: boolean) =>
    arr.sort((a, b) =>
      descendingOrder ? b.stars - a.stars : a.stars - b.stars
    );

  const descendingOrder = state.sortParams.descendingOrder;

  const all = state.all;

  switch (type) {
    case ProductsActionTypes.SET_ALL:
      return {
        ...state,
        all: payload.all,
        loading: false,
        sortedProducts: payload.all,
      };

    case ProductsActionTypes.CHANGE_SHOW_OPTION:
      return { ...state, showOption: payload };

    case ProductsActionTypes.SWITCH_PAGE:
      if (state.currentPage === payload) return state;
      return {
        ...state,
        currentPage: payload,
      };

    case ProductsActionTypes.SWITCH_PAGE_ARROW:
      const newPage = state.currentPage + payload;
      if (1 > newPage || newPage > all.length / state.showOption) return state;
      return {
        ...state,
        currentPage: newPage,
      };

    case ProductsActionTypes.SEARCH:
      return { ...state, sortedProducts: payload, showOption: all.length };

    case ProductsActionTypes.SORT_BY_NAME:
      const nameSort = sortByName(all, descendingOrder);
      return {
        ...state,
        currentPage: payload,
        sortedProducts: nameSort,
        sortParams: { ...sortParams, sortedByName: true, descendingOrder },
      };

    case ProductsActionTypes.SORT_BY_VIEWS:
      const viewSort = sortByViews(all, descendingOrder);
      return {
        ...state,
        currentPage: payload,
        sortedProducts: viewSort,
        sortParams: { ...sortParams, sortedByViews: true, descendingOrder },
      };

    case ProductsActionTypes.SORT_BY_THE_START_DATE:
      const startDateSort = sortByTheStartDate(all, descendingOrder);
      return {
        ...state,
        currentPage: payload,
        sortedProducts: startDateSort,
        sortParams: {
          ...sortParams,
          sortedByTheStartDate: true,
          descendingOrder,
        },
      };

    case ProductsActionTypes.SORT_BY_THE_END_DATE:
      const endDateSort = sortByTheEndDate(all, descendingOrder);
      return {
        ...state,
        currentPage: payload,
        sortedProducts: endDateSort,
        sortParams: {
          ...sortParams,
          sortedByTheEndDate: true,
          descendingOrder,
        },
      };

    case ProductsActionTypes.SORT_BY_RATING:
      const rateSort = sortByRating(all, descendingOrder);
      return {
        ...state,
        currentPage: payload,
        sortedProducts: rateSort,
        sortParams: { ...sortParams, sortedByRating: true, descendingOrder },
      };

    case ProductsActionTypes.RESET_FILTERS:
      return {
        ...state,
        sortParams,
        sortedProducts: all,
        currentPage: 1,
        showOption: INITIAL_STATE.showOption,
      };

    case ProductsActionTypes.CHANGE_ORDER:
      const currentParams = state.sortParams;
      return {
        ...state,
        currentPage: 1,
        sortParams: { ...currentParams, descendingOrder: payload },
      };

    case ProductsActionTypes.CHANGE_LANGUAGE:
      return { ...state, language: payload };

    default:
      return state;
  }
};
