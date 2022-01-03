import { useContext } from 'react';
import { ApplicationContext } from '../../context';
import Wrapper from '../../components/Wrapper';
import Input from '../../components/Input';
import Card from '../../components/Card';
import {
  ContactsContainer,
  SearchContainer
} from './styled';

const ContactsView = () => {
  const { state } = useContext(ApplicationContext)

  const handleSearch = (e) => {
    //...
  }

  return (
    <ContactsContainer>
      <Wrapper>
        <h1>Contacts</h1>
        <SearchContainer>
          <Input onChange={handleSearch} type='text' />
        </SearchContainer>
        <Card />
      </Wrapper>
    </ContactsContainer>
  )
}

export default ContactsView;