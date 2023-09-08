import like from '@assets/images/client/like.png';
import { useEffect, useState } from 'react';

const FOR_CLIENT: ForClient[] = [
  {
    id: 1,
    img: like,
    title: 'Фото доставок наших букетов',
    description:
      'Безупречное качество обслуживания и доставка в любую точку города',
  },
  {
    id: 2,
    img: like,
    title: 'Фото доставок наших букетов',
    description:
      'Безупречное качество обслуживания и доставка в любую точку города',
  },
  {
    id: 3,
    img: like,
    title: 'Фото доставок наших букетов',
    description:
      'Безупречное качество обслуживания и доставка в любую точку города',
  },
];

export const HomeForClient = () => {
  const [cards, setCards] = useState<ForClient[]>([]);

  useEffect(() => {
    //   TODO: use API
    setCards(FOR_CLIENT);
  }, []);

  return (
    <section className="for-client">
      <div className="for-client__container">
        <div className="for-client__wrapper">
          <div className="for-client__card-list">
            {cards.map((card) => (
              <div
                className="for-client__card for-client__card_left"
                key={card.id}
              >
                <div className="for-client__img">
                  <img src={card.img} alt="img" />
                </div>
                <div className="for-client__text">
                  <h4 className="for-client__title">{card.title}</h4>
                  <h6 className="for-client__description">
                    {card.description}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
