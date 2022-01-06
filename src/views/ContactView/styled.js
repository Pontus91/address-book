import styled from 'styled-components';
import { themeColors , fonts} from '../../styles/config';
import { BiArrowBack } from 'react-icons/bi';

export const ContactContainer = styled.section`
  width: 100%;
  height: 100vh;
  background: ${themeColors.pink[100]};
  position: relative;
`;

export const BackIcon = styled(BiArrowBack)`
  color: ${themeColors.black[500]};

  &:hover {
    opacity: .8;
  }
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

export const DetailsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const StyledProfileImage = styled.img`
  display: block;
  border-radius: 4px;
  box-shadow: ${themeColors.shadows.primary};
  margin: 1rem 0;
  border-radius: 50%;
`;

export const StyledUserBodyWrapper = styled.section`
  background: ${themeColors.white[500]};
  border-radius: 9px;
  box-shadow: ${themeColors.shadows.primary};
  width: 100%;
  text-align: center;
  max-width: 345px;
  text-align: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;

  h2 {
    margin-bottom: .5rem;
    margin-top: .5rem;
  }
`;

export const StyledUserBodyHeader = styled.div`
  background: ${themeColors.black[500]};
  color: ${themeColors.white[500]};
  border-radius: 9px 9px 0px 0px;
  margin-bottom: 1rem;
  padding: .5rem;
  font-family: ${fonts.body};
`;

export const StyledGrid = styled.div`
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 2rem;
  display: grid;
`;