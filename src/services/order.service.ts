import { Request } from '@providers/request';

export const OrderService = {
  create(body: Order) {
    const data = {
      ...body,
      products: body.products?.map(({ count, item: { _id } }) => ({
        count,
        item: _id,
      })),
    };

    console.log(data);
    return Request.post<Order>('/orders', data).then(
      (response) => response.data,
    );
  },

  getOne(id: Id) {
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
