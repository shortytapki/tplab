import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Models/State';
import { changeLanguage } from '../Store/Products/productsActions';

import './Language.scss';

export default function Language() {
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootState) => state.products);
  const isRu = language === 'ru-RU';

  return (
    <p className="language">
      Язык:{' '}
      <span
        onClick={() => dispatch(changeLanguage('ru-RU'))}
        className={`locale ${isRu ? '' : 'locale--inactive'}`}
      >
        RU
      </span>{' '}
      |{' '}
      <span
        onClick={() => dispatch(changeLanguage('en-US'))}
        className={`locale ${isRu ? 'locale--inactive' : ''}`}
      >
        EN
      </span>
    </p>
  );
}
