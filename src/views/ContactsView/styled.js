import styled from 'styled-components'
import { breakpoints, fonts, themeColors } from '../../styles/config';
import { BiSearchAlt } from 'react-icons/bi';

export const ContactsContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  background: ${themeColors.pink[100]};
  position: relative;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  margin-bottom: 2rem;
`;

export const SearchIcon = styled(BiSearchAlt)`
  position: absolute;
  left: 1rem;
`;

export const Centered = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    color: ${themeColors.error[500]};
  }
`;

export const StyledGrid = styled.div`
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 2rem;
  display: grid;

  @media all and (min-width: ${breakpoints.m}) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1.75rem;
  }

  @media all and (min-width: ${breakpoints.l}) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1.75rem;
  }

  @media all and (min-width: ${breakpoints.xl}) {
    grid-column-gap: 3.75rem;
  }
`;

export const StyledPagination = styled.div`
  width: 100%;
  display: ${({ disabled }) => (disabled ? 'none' : 'flex')};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  button {
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const IconButton = styled.button`
  color: ${themeColors.black[500]};
  background: ${({ disabled }) => (disabled ? themeColors.gray[100] : themeColors.white[500])};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 2rem;
  font-size: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: ${themeColors.shadows.primary};

  &:disabled {
    cursor: not-allowed;
  }
`;

export const TextButton = styled.button`
  height: 36px;
  text-align: center;
  background: ${themeColors.black[500]};
  color: ${themeColors.white[500]};
  border-radius: 1.5rem;
  padding-inline: .8rem;
  border: none;
  margin-right: 2rem;
  font-size: .875rem;
  font-family: ${fonts.body};
  min-width: 36px;
`;