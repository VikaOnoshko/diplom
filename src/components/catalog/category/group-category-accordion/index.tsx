import { useState, useEffect } from 'react';
import './index.less';
import { CategoryService } from '@services/category.service';

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

  useEffect(() => {
    if (isOpen && categories.length === 0) {
      CategoryService.getList(id).then((data) => setCategories(data));
    }
  }, [isOpen]);

  return (
    <div className="accordion">
      <div className="accordion__summary" onClick={() => toggle(id)}>
        <span>{name}</span>
        <div className="accordion__arrow" data-open={isOpen}>
          <span className="arrow-left"></span>
          <span className="arrow-right"></span>
        </div>
      </div>
      {isOpen && (
        <div className="accordion__details">
          {categories.map((category) => (
            <div className="accordion__category" key={category.id}>
              {category.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
