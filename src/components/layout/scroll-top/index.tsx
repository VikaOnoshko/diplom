import { useCallback, useEffect, useState } from 'react';
import './index.less';

export const ScrollTop = () => {
  const [show, setShow] = useState(false);

  const handleScroll = useCallback(() => {
    setShow(window.scrollY > 300);
  }, []);

  function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return <>{show && <div className="scroll-top" onClick={goToTop}></div>}</>;
};
