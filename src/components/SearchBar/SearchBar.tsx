import { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Models/State';
import { filterItems } from '../Store/Products/productsActions';
import './SearchBar.scss';

export default function SearchBar() {
  const { all, language } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    const result = all.filter((item) => {
      const name = item.name.toLowerCase();
      const category = item.category.toLowerCase();
      return name.includes(query) || category.includes(query);
    });
    console.log(result);

    dispatch(filterItems(result));
  };

  return (
    <label htmlFor="searchbar">
      <input
        type="text"
        name="searchbar"
        placeholder={language === 'ru-RU' ? 'Поиск...' : 'Search...'}
        className="searchbar"
        onChange={handleChange}
      />
    </label>
  );
}
