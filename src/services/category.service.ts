import { Request } from '@providers/request';

export const CategoryService = {
  getList(id: Id) {
    return Request.get<Category[]>('/categories', {
      params: new URLSearchParams({ 'filter[group]': id }),
    }).then((response) => response.data);
  },
};
