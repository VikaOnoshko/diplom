import { Request } from '@providers/request';

export const OrderService = {
  create(body: Order) {
    return Request.post<Order>('/orders', body).then(
      (response) => response.data,
    );
  },

  getOne(id: number) {
    return Request.get<Order>(`/orders/${id}`).then(
      (response) => response.data,
    );
  },

  getList(params: Partial<Order>) {
    return Request.get<Order[]>(`/orders`, { params }).then(
      (response) => response.data,
    );
  },
};
