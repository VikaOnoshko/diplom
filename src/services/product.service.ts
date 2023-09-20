import { Request } from '@providers/request';

export const ProductService = {
  getList(params?: object) {
    return Request.get<PaginationResponse<Product>>('/products', {
      params,
    }).then((response) => response.data);
  },
};
