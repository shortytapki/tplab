import { combineReducers } from 'redux';
import { productsReducer } from './Products/productsReducer';

export const rootReducer = combineReducers({ products: productsReducer });
