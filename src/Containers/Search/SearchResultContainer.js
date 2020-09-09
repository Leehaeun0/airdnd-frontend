import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openMap } from '../../Modules/search';
import SearchResult from '../../Components/Search/SearchResult';

const SearchResultContainer = () => {
  const { mapState, viewState, searchForm, data } = useSelector(
    state => state.search,
  );

  const dispatch = useDispatch();
  const onOpenMap = () => dispatch(openMap());
  const convertDate = date => {
    const mm = parseInt(date.split('.')[1], 10);
    const dd = parseInt(date.split('.')[2], 10);
    return `${mm}월 ${dd}일`;
  };

  return (
    <SearchResult
      mapState={mapState}
      view={viewState}
      dataTotal={data.dataTotal}
      searchForm={searchForm}
      convertDate={convertDate}
      onOpenMap={onOpenMap}
    />
  );
};

export default React.memo(SearchResultContainer);
