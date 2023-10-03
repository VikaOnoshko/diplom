import { useState, useEffect } from 'react';
import './index.less';
import { CategoryService } from '@services/category.service';
import { useAppDispath, useAppSelector } from '@redux/store/store';
import { setFilter } from '@redux/reducers/catalog.reducer';
import { Accordion } from '@ui/shared/accordion';

type GroupCategoryAccordionProps = {
  groupCategory: GroupCategory;
  isOpen: boolean;
  toggle: (id: number) => void;
};

export const GroupCategoryAccordion = ({
  groupCategory,
  isOpen,
  toggle,
}: GroupCategoryAccordionProps) => {
  const { name, id } = groupCategory;
  const [categories, setCategories] = useState<Category[]>([]);

  const { filter } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispath();

  const handleClick = (id: number) => {
    if (filter.categories === id) {
      dispatch(setFilter({}));
    } else {
      dispatch(setFilter({ categories: id }));
    }
  };

  useEffect(() => {
    if (isOpen && categories.length === 0) {
      CategoryService.getList(id).then((data) => setCategories(data));
    }
  }, [isOpen]);

  return (
    <Accordion
      className="group-category"
      summary={<span>{name}</span>}
      details={categories.map((category) => (
        <div
          className="group-category__category-item"
          key={category.id}
          data-active={filter.categories === category.id}
          onClick={() => handleClick(category.id)}
        >
          {category.name}
        </div>
      ))}
      onClickSummary={() => {
        toggle(id);
      }}
      isOpen={isOpen}
    />
  );
};
