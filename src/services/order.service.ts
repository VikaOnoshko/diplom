import { Request } from '@providers/request';

export const OrderService = {
  create(body: Order) {
    return Request.post<Order>('/orders', body).then(
      (response) => response.data,
    );
  },
};
