import { Link } from 'react-router-dom';
import './index.less';

type BreadcrumbsProps = {
  crumbs: {
    title: string;
    link?: string;
  }[];
};

export const Breadcrumbs = ({ crumbs }: BreadcrumbsProps) => {
  return (
    <div className="breadcrumbs">
      {crumbs.map((item) => (
        <div className="breadcrumbs__item">
          {item.link ? (
            <Link to={item.link} className="breadcrumbs__link">
              {item.title}
            </Link>
          ) : (
            <span>{item.title}</span>
          )}
        </div>
      ))}
    </div>
  );
};
