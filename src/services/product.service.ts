import { Request } from '@providers/request';

export const ProductService = {
  getList(params?: object) {
    return Request.get<Product[]>('/products', { params }).then(
      (response) => response.data,
    );
  },
};
