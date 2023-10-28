import { useState } from 'react';

import { Accordion } from '@ui/shared/accordion';
import './index.less';

const FOOTER_NAV = [
  {
    title: 'ИНФОРМАЦИЯ',
    links: ['О НАС', 'ДОСТАВКА И ОПЛАТА', 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ'],
  },
  {
    title: 'СЛУЖБА ПОДДЕРЖКИ',
    links: [
      'КАРТА САЙТА',
      'ВОЗВРАТ ТОВАРА',
      'СВЯЗАТЬСЯ С НАМИ',
      'ДЛЯ СОТРУДНИЧЕСТВА',
    ],
  },
  {
    title: 'ЛИЧНЫЙ КАБИНЕТ',
    links: ['ЗАКЛАДКИ', 'ИСТОРИЯ ЗАКАЗОВ', 'ЛИЧНЫЙ КАБИНЕТ', 'СПИСОК НОВОСТЕЙ'],
  },
  {
    title: 'ДОПОЛНИТЕЛЬНО',
    links: ['ПОДАРКИ', 'СЕРТИФИКАТЫ', 'АКЦИИ', 'ЦВЕТЫ В ОФИС'],
  },
];

export const FooterNavAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  return (
    <div className="footer-nav-accordions">
      {FOOTER_NAV.map(({ title, links }) => (
        <Accordion
          className="footer-nav-accordions__link-group"
          key={title}
          isOpen={title === openAccordion}
          onClickSummary={(value) => {
            setOpenAccordion(value ? title : null);
          }}
          summary={
            <span className="footer-nav-accordions__summary">{title}</span>
          }
          details={links.map((link, index) => (
            <div key={index} className="footer-nav-accordions__link">
              {link}
            </div>
          ))}
        />
      ))}
    </div>
  );
};
