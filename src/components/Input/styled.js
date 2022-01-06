import styled from 'styled-components'
import { themeColors, fonts, breakpoints } from '../../styles/config';

export const StyledInput = styled.input`
  width: 100%;
  height: 45px;
  padding: 0.5rem 0.5rem 0.5rem 2.8rem;
  border-radius: 4px;
  border: 1px solid ${themeColors.gray[100]};
  font-size: 1rem;
  font-family: ${fonts.body};
  box-shadow: ${themeColors.shadows.primary};
  color: ${themeColors.gray[500]};

  &:focus {
    outline: none;
    box-shadow: inset 0 0 5px 0 ${themeColors.shadows.secondary};
  }

  @media all and (min-width: ${breakpoints.m}) {
    max-width: 20.1rem;
  }

  @media all and (min-width: ${breakpoints.l}) {
    max-width: 18.3rem;
  }

  @media all and (min-width: ${breakpoints.xl}) {
    max-width: 21.5rem;
  }

`;