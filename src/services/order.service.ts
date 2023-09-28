import { Request } from '@providers/request';

export const OrderService = {
  getList(params?: object) {
    return Request.get<PaginationResponse<Order>>('/orders', {
      params,
    }).then((response) => response.data);
  },
};
