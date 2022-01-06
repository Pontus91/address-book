import styled from 'styled-components';
import { breakpoints } from '../../styles/config';

const Container = styled.div`
  margin: 0 auto;
  max-width: 78rem;
  padding: 3rem 1.5rem;

  @media all and (min-width: ${breakpoints.m}) {
    padding: 4rem 3rem 0 3rem;
  }
`;

export {
  Container,
}
