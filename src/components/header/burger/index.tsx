import { useState } from 'react';
import './index.less';
import { Nav } from './nav-bar';

export const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="burger">
      <div
        className="burger__items"
        data-open={isOpen}
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <div className={'burger__item'}></div>
        <div className={'burger__item'}></div>
        <div className={'burger__item'}></div>
      </div>
      <Nav open={isOpen} close={() => setOpen(false)} />
    </div>
  );
};
