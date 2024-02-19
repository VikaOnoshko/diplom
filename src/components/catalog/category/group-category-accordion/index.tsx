import './index.less';
import { useState, useEffect } from 'react';
import { CategoryService } from '@services/category.service';
import { useAppDispath, useAppSelector } from '@redux/store/store';
import { setFilter } from '@redux/reducers/catalog.reducer';
import { Accordion } from '@ui/shared/accordion';

type GroupCategoryAccordionProps = {
  groupCategory: GroupCategory;
  isOpen: boolean;
  toggle: (id: Id) => void;
};

export const GroupCategoryAccordion = ({
  groupCategory,
  isOpen,
  toggle,
}: GroupCategoryAccordionProps) => {
  const { name, _id } = groupCategory;
  const [categories, setCategories] = useState<Category[]>([]);

  const { filter } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispath();

  const handleClick = (id: Id) => {
    if (filter.categories === id) {
      dispatch(setFilter({}));
    } else {
      dispatch(setFilter({ 'filter[category]': id }));
    }
  };

  useEffect(() => {
    if (isOpen && categories.length === 0) {
      CategoryService.getList(_id).then((data) => setCategories(data));
    }
  }, [isOpen, _id, categories.length]);

  return (
    <Accordion
      className="group-category"
      summary={<span>{name}</span>}
      details={categories.map((category) => (
        <div
          className="group-category__category-item"
          key={category._id}
          data-active={filter.categories === category._id}
          onClick={() => handleClick(category._id)}
        >
          {category.name}
        </div>
      ))}
      onClickSummary={() => {
        toggle(_id);
      }}
      isOpen={isOpen}
    />
  );
};
