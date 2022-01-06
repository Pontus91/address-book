import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ApplicationContext } from '../../context';
import Wrapper from '../../components/Wrapper';
import { Link } from 'react-router-dom';
import {
  ContactContainer,
  BackIcon,
  Centered,
  DetailsContainer,
  StyledProfileImage,
  StyledUserBodyWrapper,
  StyledUserBodyHeader,
  StyledGrid,
} from './styled';
import ClipLoader from 'react-spinners/ClipLoader';
import { HiMail } from 'react-icons/hi';
import { FcCellPhone } from 'react-icons/fc';

const ContactView = () => {
  const { id } = useParams();
  const { state } = useContext(ApplicationContext);
  const user = state.contacts.find((user) => user.id === parseInt(id));
  return (
    <ContactContainer>
      <Wrapper>
        <Link to='/contacts'>
          <BackIcon size={48} />
        </Link>
        <Centered>
          {state.errorText.length > 0 && <h2>{state.errorText}</h2>}
        </Centered>
        {state.loading ? (
          <Centered>
            <ClipLoader />
          </Centered>
        ) : (
          <DetailsContainer>
            <StyledProfileImage src={user.picture.large} />
            <h1>
              {user.name.title} {user.name.first} {user.name.last}
            </h1>
            <h2>
              {user.location.city}, {user.location.country}
            </h2>
            <StyledUserBodyWrapper>
              <StyledUserBodyHeader>Details</StyledUserBodyHeader>
              <StyledGrid>
                <div>
                  <h2>Office</h2>
                  <h3>
                    {user.location.street.number}, {user.location.street.name}
                  </h3>
                </div>
                <div>
                  <h2>Duration</h2>
                  <h3>Worked here for {user.registered.age} years</h3>
                </div>
              </StyledGrid>
            </StyledUserBodyWrapper>
            <StyledUserBodyWrapper>
              <StyledUserBodyHeader>Contact</StyledUserBodyHeader>
              <h2>
                Phone <FcCellPhone />
              </h2>
              <a href={'tel:' + user.phone}>{user.phone}</a>
              <h2>
                Email <HiMail />
              </h2>
              <a href={'mailto:' + user.email}>{user.email}</a>
            </StyledUserBodyWrapper>
          </DetailsContainer>
        )}
      </Wrapper>
    </ContactContainer>
  );
};

export default ContactView;
