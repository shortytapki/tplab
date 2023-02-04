import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setAll } from './components/Store/Products/productsActions';
import { Route, Routes } from 'react-router-dom';

import Home from './routes/Home/Home';
import Card from './routes/Card/Card';
import Language from './components/Language/Language';
import { RootState } from './components/Models/State';

import RAW_DATA from './products.json';


export default function App() {
  const { currentPage, sortedProducts } = useSelector(
    (state: RootState) => state.products
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = () => {
      const data = RAW_DATA;
      dispatch(
        setAll({
          all: data,
          persistedPage: currentPage,
          persistedSortedElements: sortedProducts.length
            ? sortedProducts
            : data,
        })
      );
    };

    getData();
  }, []);

  return (
    <>
      <Language />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="product/:id" element={<Card />} />
      </Routes>
    </>
  );
}
