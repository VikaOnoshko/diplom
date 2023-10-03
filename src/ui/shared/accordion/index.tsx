import { useEffect, useState } from 'react';
import './index.less';

export type AccordionProps = {
  summary: React.ReactNode;
  details: React.ReactNode;

  className?: string;
  isOpen?: boolean;
  onClickSummary?: (isOpen: boolean) => void;
};

export const Accordion = ({
  summary,
  details,
  className = '',
  isOpen,
  onClickSummary,
}: AccordionProps) => {
  const [open, setOpen] = useState(isOpen);

  const handleClickSummary = () => {
    if (onClickSummary) {
      onClickSummary(!open);
    } else {
      setOpen(!open);
    }
  };

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <div className={`accordion ${className}`}>
      <div className="accordion__summary" onClick={handleClickSummary}>
        {summary}
        <span className="accordion__arrow" data-open={open}></span>
      </div>
      {open && <div className="accordion__details">{details}</div>}
    </div>
  );
};
