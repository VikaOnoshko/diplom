// import ava from '@assets/images/forum/ava.png';
import './index.less';

type NewsCardProps = {
  news: News;
};

export const NewsCard = ({ news }: NewsCardProps) => {
  const { title, img, text } = news;

  return (
    <div className="forum-card">
      <div className="forum-card__header">
        <div className="forum-card__header-background_empty"></div>
        <div className="forum-card__header-background_filled"></div>
        <img src={img} alt="photo" />
      </div>
      <div className="forum-card__body">
        <div className="forum-card__title">
          <h4>{title}</h4>
        </div>
        <div className="forum-card__description">
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};
