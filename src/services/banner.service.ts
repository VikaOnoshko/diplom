import { Request } from '@providers/request';

export const BannerService = {
  getList() {
    return Request.get<HomeBanner[]>('/banners').then(
      (response) => response.data,
    );
  },
};
