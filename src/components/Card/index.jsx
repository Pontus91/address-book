import {
  CardContainer,
  CardHeader,
  CardBody,
  CardImage,
  CardContact,
  CardContactItem,
  CardLink,
} from './styled';
import { HiMail } from 'react-icons/hi';
import { FcCellPhone } from 'react-icons/fc';

const Card = (props) => {
  return (
    <CardContainer>
      <CardHeader />
      <CardBody>
        <CardImage src={props.picture.medium} />
        <h2>
          {props.name.first} {props.name.last}
        </h2>
        <h3>
          {props.location.city}, {props.location.country}
        </h3>
        <CardContact>
          <CardContactItem href={'mailto:' + props.email}>
            <HiMail size={28} />
          </CardContactItem>
          <CardContactItem href={'tel:' + props.phone}>
            <FcCellPhone size={28} />
          </CardContactItem>
        </CardContact>
        <CardLink to={`/contacts/${props.id}`}>View Profile</CardLink>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
