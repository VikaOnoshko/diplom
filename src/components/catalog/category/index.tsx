import { GroupCategoryService } from '@services/group-category.service';
import { useEffect, useState } from 'react';
import { GroupCategoryAccordion } from './group-category-accordion';
import './index.less';

export const Category = () => {
  const [groupCatigoryList, setGroupCategoryList] = useState<GroupCategory[]>(
    [],
  );

  const [openCategoryGroup, setOpenCategoryGroup] = useState<number | null>(
    null,
  );

  useEffect(() => {
    GroupCategoryService.getList().then((data) => setGroupCategoryList(data));
  }, []);

  return (
    <div className="categories">
      <div className="categories__container">
        <div className="categories__wrapper">
          <ul>
            {groupCatigoryList.map((group) => (
              <GroupCategoryAccordion
                key={group.id}
                groupCategory={group}
                isOpen={group.id === openCategoryGroup}
                toggle={(id) => {
                  if (openCategoryGroup === id) {
                    setOpenCategoryGroup(null);
                  } else {
                    setOpenCategoryGroup(id);
                  }
                }}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
