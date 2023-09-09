import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import komp from '@assets/images/presents/komp.png';
import './index.less';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const BANNERS: HomeBanner[] = [
  { id: 1, img: komp, title: 'Розы', position: 'left' },
  { id: 2, img: komp, title: 'Розы', position: 'left' },
  { id: 3, img: komp, title: 'Розы', position: 'left' },
  { id: 4, img: komp, title: 'Розы', position: 'left' },
  { id: 5, img: komp, title: 'Розы', position: 'left' },
];

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
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="banner__swiper"
          >
            {banners.map((banner) => (
              <SwiperSlide key={banner.id}>
                <div className="banner__card">
                  <div className="banner__img">
                    <img src={banner.img} alt="komp" />
                  </div>
                  <span
                    className={`banner__text banner__text_${banner.position}`}
                  >
                    {banner.title}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
