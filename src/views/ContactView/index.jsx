import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ApplicationContext } from '../../context';

const ContactView = () => {
  const { id } = useParams();
  const { state } = useContext(ApplicationContext);
  const user = state.contacts.find(user => user.id === parseInt(id));
  return (
    <div>Contact View</div>
  )
}

export default ContactView;