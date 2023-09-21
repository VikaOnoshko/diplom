import { Request } from '@providers/request';

export const CategoryService = {
  getList(id: number) {
    return Request.get<Category[]>(`/group-categories/${id}/categories`).then(
      (response) => response.data,
    );
  },
};
