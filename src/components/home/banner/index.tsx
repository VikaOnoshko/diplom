import { useEffect, useState } from 'react';

import komp from '@assets/images/presents/komp.png';
import './index.less';

const BANNERS: HomeBanner[] = [
  { id: 1, img: komp, title: 'Розы', position: 'left' },
  { id: 2, img: komp, title: 'Розы', position: 'left' },
  { id: 3, img: komp, title: 'Розы', position: 'left' },
  { id: 4, img: komp, title: 'Розы', position: 'left' },
  { id: 5, img: komp, title: 'Розы', position: 'left' },
];

import './index.less';

export const HomeBanner = () => {
  const [banners, setBanners] = useState<HomeBanner[]>([]);

  useEffect(() => {
    //   TODO: use API
    setBanners(BANNERS);
  }, []);

  return (
    <section className="banner">
      <div className="banner__container">
        <div className="banner__wrapper">
          <div className="banner__sale">
            {banners.map((banner) => (
              <div className="banner__card" key={banner.id}>
                <div className="banner__img">
                  <img src={banner.img} alt="komp" />
                </div>
                <span
                  className={`banner__text banner__text_${banner.position}`}
                >
                  {banner.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
