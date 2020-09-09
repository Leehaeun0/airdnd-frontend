import React from 'react';
import SearchPagination from '../../Components/Search/SearchPagination';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import qs from 'qs';
import { navigatePage, fetchData } from '../../Modules/search';

const SearchPaginationContainer = () => {
  const { data, page } = useSelector(state => state.search);
  const dispatch = useDispatch();
  const history = useHistory();
  const { search: query } = useLocation();
  const queryObj = qs.parse(query, { ignoreQueryPrefix: true });
  const pageArray = Array.from(
    { length: Math.ceil(data.dataTotal / 20) },
    (_, i) => i + 1,
  );

  const onNavPage = newPage => {
    queryObj.page = newPage;
    history.replace(`?${qs.stringify(queryObj)}`);
    dispatch(fetchData(`?${qs.stringify(queryObj)}`));
    dispatch(navigatePage(newPage));
  };

  return (
    <SearchPagination
      page={page}
      dataTotal={data.dataTotal}
      pageArray={pageArray}
      onNavPage={onNavPage}
    />
  );
};

export default SearchPaginationContainer;
