import { useContext, useState } from 'react';
import { ApplicationContext } from '../../context';
import Wrapper from '../../components/Wrapper';
import Input from '../../components/Input';
import Card from '../../components/Card';
import Dropdown from '../../components/Dropdown';
import { updateSearchResult } from '../../context/actions';
import { sortTypes } from '../../constants/sort';
import ClipLoader from 'react-spinners/ClipLoader';
import {
  ContactsContainer,
  SearchContainer,
  StyledGrid,
  SearchIcon,
  StyledPagination,
  IconButton,
  TextButton,
  Centered,
} from './styled';
import usePagination from '../../hooks/usePagination';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';

const ContactsView = () => {
  const { state, dispatch } = useContext(ApplicationContext);
  const [searching, setSearching] = useState(false);

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
  const handleSearch = (searchTerm) => {
    if (searchTerm.length > 0) {
      setSearching(true);
    } else {
      setSearching(false);
    }
    const searchVal = searchTerm.toLowerCase();
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
        <Centered>
          {state.errorText.length > 0 && <h2>{state.errorText}</h2>}
        </Centered>
        <Centered>{state.loading && <ClipLoader />}</Centered>
        <SearchContainer>
          <SearchIcon size={21} />
          <Input callback={handleSearch} placeholder='Search contacts' />
          <Dropdown />
        </SearchContainer>
        { searching && state.searchResult.length === 0 && (
          <h2>No contacts found</h2>
        )}
        <StyledGrid>
          {searching
            ? state.searchResult
                .sort(sortTypes[state.sortBy].fn)
                .slice(firstPageIndex, lastPageIndex)
                .map((data, i) => <Card key={i} {...data} />)
            : state.contacts
                .sort(sortTypes[state.sortBy].fn)
                .slice(firstPageIndex, lastPageIndex)
                .map((data, i) => <Card key={i} {...data} />)}
        </StyledGrid>
        {!state.loading && state.searchResult.length > 0 && (
          <StyledPagination>
            <IconButton onClick={prevPage} disabled={currentPage === 1}>
              <HiChevronDoubleLeft />
            </IconButton>
            <TextButton>{currentPage}</TextButton>
            <IconButton
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              <HiChevronDoubleRight />
            </IconButton>
          </StyledPagination>
        )}
      </Wrapper>
    </ContactsContainer>
  );
};

export default ContactsView;
