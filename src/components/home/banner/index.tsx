import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './index.less';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { BannerService } from '@services/banner.service';

export const HomeBanner = () => {
  const [banners, setBanners] = useState<HomeBanner[]>([]);

  useEffect(() => {
    BannerService.getList().then((data) => setBanners(data));
  }, []);

  return (
    <section className="banner">
      <div className="banner__container">
        <div className="banner__wrapper">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
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
              <SwiperSlide key={banner._id}>
                <div className="banner__img">
                  <img src={banner.img} alt="banner" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
