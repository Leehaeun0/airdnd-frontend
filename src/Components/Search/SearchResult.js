import React from 'react';
import styled from 'styled-components';
import { FilterListContainer } from '../../Containers/Search/FilterListContainer';
import RecentHomeList from './RecentHomeList';
import SearchPagenation from './SearchPagenation';
import { FloatingMapButton } from './MapButton';
import HomeListContainer from '../../Containers/Search/HomeListContainer';

const SearchResult = ({
  mapState,
  view,
  openMap,
  onShowMap,
  dataTotal,
  location,
  guestCount,
}) => {
  return (
    <StWrapper mapState={mapState} view={view}>
      <StSpan>
        숙박 {dataTotal}건 · 게스트 {guestCount}명
      </StSpan>
      <StHeader>{location}의 숙소</StHeader>
      <FilterListContainer mapState={mapState} onShowMap={onShowMap} />
      <HomeListContainer mapState={mapState} />
      <RecentHomeList />
      <SearchPagenation />
      <FloatingMapButton openMap={openMap} />
    </StWrapper>
  );
};

const StWrapper = styled.div`
  width: ${({ mapState }) => (mapState ? '840px' : '100%')};
  padding: ${({ mapState }) =>
    mapState ? '5rem 2rem 3rem' : '5rem 8rem 3rem'};
  margin-top: 8rem;
  position: relative;

  @media ${({ theme }) => theme.size.medium} {
    display: ${({ view }) => (view === 'result' ? 'block' : 'none')};
    width: ${({ view }) => (view === 'result' ? '100%' : '0px')};
    padding: 5rem 2rem 3rem;
  }
`;

const StHeader = styled.h2`
  font-size: 3.2rem;
  font-weight: 800;
  margin: 1rem 0;
`;

const StSpan = styled.span`
  font-size: 1.4rem;
`;

export default SearchResult;
