import { useState, useContext } from 'react';
import { sort } from '../../constants/sort';
import { ApplicationContext } from '../../context';
import { updateSortBy } from '../../context/actions';
import {
  DropdownContainer,
  DropdownIcon,
  CheckboxContainer,
  DropdownButton,
  StyledSelect,
} from './styled';

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const { dispatch } = useContext(ApplicationContext);

  /**
   * Dispatches an action to update sorting
   * based of the selected option
   * @param e - event
   */
  const handleSorting = (e) => {
    dispatch(updateSortBy(e.target.value));
  }

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setOpen(!open)}>
        <DropdownIcon size={36} />
        <label>Filters</label>
      </DropdownButton>
      {open && (
        <CheckboxContainer>
            <StyledSelect onChange={handleSorting}>
              <option value={sort.default}>Default</option>
              <option value={sort.ascendingName}>Name: A-Z</option>
              <option value={sort.descendingName}>Name: Z-A</option>
              <option value={sort.ascendingCountry}>Country: A-Z</option>
              <option value={sort.descendingCountry}>Country: Z-A</option>
            </StyledSelect>
        </CheckboxContainer>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
