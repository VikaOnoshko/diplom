import { Request } from '@providers/request';

export const GroupCategoryService = {
  getList() {
    return Request.get<GroupCategory[]>('/group-categories').then(
      (response) => response.data,
    );
  },
};
