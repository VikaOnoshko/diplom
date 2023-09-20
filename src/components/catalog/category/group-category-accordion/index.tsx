import './index.less';

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
          <span>test</span>
        </div>
      )}
    </div>
  );
};
