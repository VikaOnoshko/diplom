import './index.less';

export const HomeSeach = () => {
  return (
    <section className="search">
      <div className="search__container">
        <div className="search__wrapper">
          <div className="search__input-box">
            <input type="text" placeholder="Поиск по товарам" />
            <span className="icon-search"></span>
          </div>
        </div>
      </div>
    </section>
  );
};
