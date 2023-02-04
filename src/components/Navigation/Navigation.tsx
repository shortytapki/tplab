import SearchBar from '../SearchBar/SearchBar';
import './Navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDownShortWide,
  faArrowUpShortWide,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  sortByName,
  sortByRating,
  sortByTheEndDate,
  sortByTheStartDate,
  sortByViews,
  changeOrder,
  resetFilters,
  changeShowOption,
} from '../Store/Products/productsActions';
import { RootState } from '../Models/State';

export default function Navigation() {
  const dispatch = useDispatch();
  const { sortParams, language, all, showOption } = useSelector(
    (state: RootState) => state.products
  );

  const isRu = language === 'ru-RU';

  const {
    sortedByName,
    sortedByTheEndDate,
    sortedByTheStartDate,
    sortedByViews,
    sortedByRating,
    descendingOrder,
  } = sortParams;

  const filters = [
    {
      text: isRu ? 'по названию' : 'by name',
      handler: () => dispatch(sortByName()),
      active: sortedByName,
    },
    {
      text: isRu ? 'по просмотрам' : 'by views',
      handler: () => dispatch(sortByViews()),
      active: sortedByViews,
    },
    {
      text: isRu ? 'по дате начала' : 'by the start date',
      handler: () => dispatch(sortByTheStartDate()),
      active: sortedByTheStartDate,
    },
    {
      text: isRu ? 'по дате окончания' : 'by the end date',
      handler: () => dispatch(sortByTheEndDate()),
      active: sortedByTheEndDate,
    },
    {
      text: isRu ? 'по рейтингу' : 'by rating',
      handler: () => dispatch(sortByRating()),
      active: sortedByRating,
    },
  ];

  const changeOrderAndSort = (order: boolean) => {
    dispatch(changeOrder(order));
    filters.forEach((item) => item.active && item.handler());
  };

  return (
    <nav className="navigation">
      <div className="first-row">
        <ul className="filters">
          <li>{isRu ? 'Сортировать' : 'Sort'}:</li>
          {filters.map(({ active, handler, text }, idx) => (
            <li
              key={idx}
              className={`filters__item ${
                active ? 'filters__item--active' : ''
              }`}
              onClick={handler}
            >
              {text}
              {active && (
                <FontAwesomeIcon
                  icon={
                    descendingOrder ? faArrowDownShortWide : faArrowUpShortWide
                  }
                />
              )}
            </li>
          ))}
        </ul>
        <SearchBar />
      </div>
      <ul className="filters">
        <li>{isRu ? 'Порядок' : 'Order'}:</li>
        <li
          className={`filters__item ${
            !descendingOrder ? 'filters__item--active' : ''
          }`}
          onClick={() => changeOrderAndSort(false)}
        >
          {isRu ? 'по возрастанию' : 'ascending'}
          {!descendingOrder && <FontAwesomeIcon icon={faArrowUpShortWide} />}
        </li>
        <li
          className={`filters__item ${
            descendingOrder ? 'filters__item--active' : ''
          }`}
          onClick={() => changeOrderAndSort(true)}
        >
          {isRu ? 'по убыванию' : 'descending'}
          {descendingOrder && <FontAwesomeIcon icon={faArrowDownShortWide} />}
        </li>
      </ul>
      <ul className="filters">
        <li
          className="filters__item"
          onClick={() => {
            dispatch(resetFilters());
          }}
        >
          {isRu ? 'Сбросить фильтры' : 'Reset filters'}
        </li>
        <li>
          <label htmlFor="products-on-page">
            {isRu ? 'Отображать в списке' : 'Show the list of'}:
          </label>
          <select
            name="products-on-page"
            id="viewoptions"
            onChange={(e) => dispatch(changeShowOption(+e.target.value))}
            value={showOption}
          >
            <option value={all.length}>{isRu ? 'все' : 'all'}</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={6}>6</option>
          </select>
        </li>
      </ul>
    </nav>
  );
}
