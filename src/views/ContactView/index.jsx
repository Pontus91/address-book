import { useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ApplicationContext } from '../../context';
import Wrapper from '../../components/Wrapper';
import { Link } from 'react-router-dom';
import { ContactContainer } from './styled';

const ContactView = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location, 'location');
  const { state } = useContext(ApplicationContext);
  const user = state.contacts.find((user) => user.id === parseInt(id));
  return (
    <ContactContainer>
      <Wrapper>
        <Link
          to='/contacts'
        >
          Click me
        </Link>
        {user.name.first}
      </Wrapper>
    </ContactContainer>
  );
};

export default ContactView;
