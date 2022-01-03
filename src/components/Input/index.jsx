import {
  StyledInput
} from './styled'

const Input = ({ onChange, type}) => {
  return (
    <StyledInput type={type} onChange={onChange} />
  )
}

export default Input;