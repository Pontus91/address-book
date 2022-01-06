import { useContext } from 'react';
import { ApplicationContext } from '../../context';
import Wrapper from '../../components/Wrapper';
import Input from '../../components/Input';
import Card from '../../components/Card';
import Dropdown from '../../components/Dropdown';
import { updateSearchResult } from '../../context/actions';
import { sortTypes } from '../../constants/sort';
import {
  ContactsContainer,
  SearchContainer,
  StyledGrid,
  SearchIcon,
  StyledPagination,
  IconButton,
  TextButton,
} from './styled';
import usePagination from '../../hooks/usePagination';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';

const ContactsView = () => {
  const { state, dispatch } = useContext(ApplicationContext);

  const {
    totalPages,
    currentPage,
    firstPageIndex,
    lastPageIndex,
    nextPage,
    prevPage,
  } = usePagination({
    itemsPerPage: 6,
    itemAmount:
      state.searchResult.length > 0
        ? state.searchResult.length
        : state.contacts.length,
  });

  /**
   * Takes input value and filters contacts.
   * Using lowercase on all so no mismatch
   * @param e
   */
  const handleSearch = (e) => {
    const searchVal = e.target.value.toLowerCase();
    const filteredContacts = state.contacts.filter((user) => {
      return (
        user.name.first.toLowerCase().includes(searchVal) ||
        user.name.first.toLowerCase().includes(searchVal) ||
        user.location.country.toLowerCase().includes(searchVal) ||
        user.location.city.toLowerCase().includes(searchVal)
      );
    });
    dispatch(updateSearchResult(filteredContacts));
  };

  return (
    <ContactsContainer>
      <Wrapper>
        <h1>Contacts</h1>
        <SearchContainer>
          <SearchIcon size={21} />
          <Input
            onChange={handleSearch}
            type='text'
            placeholder='Search contacts'
          />
          <Dropdown />
        </SearchContainer>
        <StyledGrid>
          {state.searchResult.length > 0
            ? state.searchResult
                .sort(sortTypes[state.sortBy].fn)
                .slice(firstPageIndex, lastPageIndex)
                .map((data, i) => <Card key={i} {...data} />)
            : state.contacts
                .sort(sortTypes[state.sortBy].fn)
                .slice(firstPageIndex, lastPageIndex)
                .map((data, i) => <Card key={i} {...data} />)}
        </StyledGrid>
        <StyledPagination>
          <IconButton onClick={prevPage} disabled={currentPage === 1}>
            <HiChevronDoubleLeft />
          </IconButton>
          <TextButton>{currentPage}</TextButton>
          <IconButton onClick={nextPage} disabled={currentPage === totalPages}>
            <HiChevronDoubleRight />
          </IconButton>
        </StyledPagination>
      </Wrapper>
    </ContactsContainer>
  );
};

export default ContactsView;