import './index.less';

export const EmptySearchResult = () => {
  return (
    <ol className="main-search__result-list">
      <li className="main-search__result-empty">
        <h5>Товар не найден</h5>
      </li>
    </ol>
  );
};
