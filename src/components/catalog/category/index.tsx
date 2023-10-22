import { GroupCategoryService } from '@services/group-category.service';
import { useEffect, useState } from 'react';
import { GroupCategoryAccordion } from './group-category-accordion';
import './index.less';
import { Button } from '@ui/shared/button';
import { useAppDispath } from '@redux/store/store';
import { setFilter } from '@redux/reducers/catalog.reducer';

type Props = { isOpen: boolean; close: () => void };

export const Category = ({ isOpen, close }: Props) => {
  const dispatch = useAppDispath();
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
    <div className="categories" data-open={isOpen}>
      <div className="categories__container">
        <div className="categories__wrapper">
          <div className="categories__header">
            <span className="categories__name">Фильтр</span>
            <div className="categories__close" onClick={close}></div>
          </div>

          <ul className="categories__main">
            <Button
              text="Сбросить фильтр"
              onClick={() => {
                dispatch(setFilter({}));
                close();
              }}
            />
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
