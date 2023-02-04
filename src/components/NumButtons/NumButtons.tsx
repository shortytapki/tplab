import Button from '../Button/Button';
import './NumButtons.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Models/State';

import { goToPage, switchPageByArrow } from '../Store/Products/productsActions';

export default function NumButtons() {
  const { currentPage, sortedProducts, showOption } = useSelector(
    (state: RootState) => state.products
  );

  const buttons = Array(Math.ceil(sortedProducts.length / showOption)).fill(0);
  const dispatch = useDispatch();

  const prevPage = () => dispatch(switchPageByArrow(-1));
  const nextPage = () => dispatch(switchPageByArrow(1));
  const choosePage = (page: number) => dispatch(goToPage(page));
  return (
    <ul className="buttons">
      <li>
        <Button arrow clickHandler={prevPage}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Button>
      </li>
      {buttons.map((_, idx) => {
        const page = idx + 1;
        return (
          <li key={idx}>
            <Button
              active={page === currentPage}
              clickHandler={() => choosePage(page)}
            >
              {page}
            </Button>
          </li>
        );
      })}
      <li>
        <Button arrow clickHandler={nextPage}>
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>
      </li>
    </ul>
  );
}
