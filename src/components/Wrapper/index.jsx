import {
  Container,
} from './styled';

const Wrapper = ({ children } ) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Wrapper;