import styled from 'styled-components'
import { themeColors } from '../../styles/config';
import { Link } from 'react-router-dom';

export const CardContainer = styled.section`
  box-shadow: ${themeColors.shadows.primary};
  width: 100%;
  border-radius: 4px;
  max-width: 24rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${themeColors.white[500]};

  h2 {
    margin-bottom: 0;
  }
`;

export const CardHeader = styled.div`
  height: 5rem;
  width: 100%;
  border-radius: 4px 4px 0 0;
  background: ${themeColors.black[400]};
`;

export const CardBody = styled.div`
  position: relative;
  bottom: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const CardImage = styled.img`
  border-radius: 50%;
  margin-bottom: 1rem;
`;

export const CardContact = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const CardContactItem = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: currentColor;

  svg {
    margin-right: .5rem;
  }
`;

export const CardLink = styled(Link)`
  color: ${themeColors.white[500]};
  padding: .8rem;
  width: 150px;
  text-align: center;
  border-radius: 1.5rem;
  margin-top: 1rem;
  background: ${themeColors.black[500]};

  &:hover {
    opacity: .8;
  }
`