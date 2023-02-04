import { useSelector } from 'react-redux';
import { RootState } from '../../components/Models/State';
import Navigation from '../../components/Navigation/Navigation';
import NumButtons from '../../components/NumButtons/NumButtons';
import Products from '../../components/Products/Products';

export default function Home() {
  document.documentElement.className = '';
  const { language } = useSelector((state: RootState) => state.products);

  return (
    <div className="products-page">
      <h1 className="heading">
        {language === 'ru-RU' ? 'Карточки контента' : 'Content cards'}
      </h1>
      <Navigation />
      <NumButtons />
      <Products />
    </div>
  );
}
