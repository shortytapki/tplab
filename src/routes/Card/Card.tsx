import './Card.scss';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import DiscountLabel from '../../components/DiscountLabel/DiscountLabel';
import { useDispatch, useSelector } from 'react-redux';
import { faStar as faStarStroke } from '@fortawesome/free-regular-svg-icons';

import { RootState } from '../../components/Models/State';
import Price from '../../components/Price/Price';

export default function Card() {
  document.documentElement.className = 'card-page';

  const { id } = useParams();

  const { all, language } = useSelector((state: RootState) => state.products);

  const isRu = language === 'ru-RU';

  const product = all.filter((item) => item.id === id!).at(0);

  const {
    discount,
    image_url,
    stars,
    name,
    logo_url,
    old_price,
    new_price,
    disclaimer,
  } = product!;

  const startsArr = Array(5).fill(0);

  const oldPriceText = isRu ? 'Старая цена' : 'Old price';
  const newPriceText = isRu ? 'Цена по акции' : 'Discount price';
  const defaultPriceText = isRu ? 'Цена' : 'Price';

  return (
    <div className="card-view">
      <Link to={'/'} className="return-btn">
        <FontAwesomeIcon icon={faChevronLeft} />
        {isRu ? 'Назад' : 'Back'}
      </Link>
      <div className="card">
        <header className="card-header">
          {discount > 0 ? (
            <DiscountLabel>{discount}</DiscountLabel>
          ) : (
            <div></div>
          )}
          <img src={logo_url} alt="" height={77} />
        </header>
        <section className="layout">
          <div className="img-container">
            <img src={image_url} alt="" className="img-container__image" />
          </div>
          <div className="description">
            <h1>{name}</h1>
            <ul className="stars">
              {startsArr.map((_, idx) => (
                <li key={idx}>
                  {
                    <FontAwesomeIcon
                      icon={idx + 1 <= stars ? faStar : faStarStroke}
                      size="xl"
                    />
                  }
                </li>
              ))}
            </ul>
            <div className="prices">
              <div className="old-price">
                {new_price ? <Price value={old_price} /> : ''}
                <p className="grayspan">{new_price && oldPriceText}</p>
              </div>
              <div className="new-price">
                <Price isNew value={new_price ? new_price : old_price} />
                <p className="grayspan grayspan--old">
                  {new_price ? newPriceText : defaultPriceText}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {disclaimer && <footer className="disclaimer">{disclaimer}</footer>}
    </div>
  );
}
