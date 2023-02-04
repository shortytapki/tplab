import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../Models/State';
import './Products.scss';

export default function Products() {
  const { loading, language, sortedProducts, currentPage, showOption } =
    useSelector((state: RootState) => state.products);

  const start = (currentPage - 1) * showOption;
  const end = start + showOption;
  const toRender = sortedProducts.slice(start, end);

  const isRu = language === 'ru-RU';

  return (
    <div>
      <header className="product-header grid">
        <p>{isRu ? 'Фото' : 'Photo'}</p>
        <p>{isRu ? 'Название' : 'Name'}</p>
        <p className="aligned">{isRu ? 'Просмотры' : 'Views'}</p>
        <p className="aligned">{isRu ? 'Начало ротации' : 'Rotation start'}</p>
        <p className="aligned">{isRu ? 'Конец ротации' : 'Rotation end'}</p>
      </header>

      <ul>
        {!loading &&
          toRender.map(
            ({
              name,
              image_url,
              category,
              views,
              start_date,
              end_date,
              id,
            }) => {
              return (
                <Link to={`product/${id}`} key={name}>
                  <li className="product grid">
                    <img
                      src={image_url}
                      alt={name}
                      className="product__image"
                    />
                    <div>
                      <p>{name}</p>
                      <p className="product__category">{category}</p>
                    </div>
                    <p className="aligned product__detail">{views}</p>
                    <p className="aligned product__detail">
                      {new Date(start_date).toLocaleDateString(language)}
                    </p>
                    <p className="aligned product__detail">
                      {new Date(end_date).toLocaleDateString(language)}
                    </p>
                  </li>
                </Link>
              );
            }
          )}
      </ul>
    </div>
  );
}
