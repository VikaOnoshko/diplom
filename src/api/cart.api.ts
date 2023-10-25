import { API_URL } from '@constants/api.constant';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    create: builder.mutation<Cart, CreateCart>({
      query: (body) => {
        return {
          url: 'carts',
          method: 'POST',
          body,
        };
      },
    }),
    update: builder.mutation<Cart, Cart>({
      query: ({ id, ...body }) => {
        return {
          url: `carts/${id}`,
          method: 'PUT',
          body,
        };
      },
    }),
    remove: builder.mutation<Cart, Cart>({
      query: ({ id }) => {
        return {
          url: `carts/${id}`,
          method: 'DELETE',
        };
      },
    }),
    getByUserId: builder.query<Cart | null, string>({
      query: (userId) => {
        return {
          url: 'carts',
          method: 'GET',
          params: { userId },
        };
      },
      transformResponse(baseQueryReturnValue) {
        return (baseQueryReturnValue as Cart[]).at(0) || null;
      },
    }),
  }),
});
