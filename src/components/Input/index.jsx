import {
  StyledInput
} from './styled'

const Input = ({ onChange, type, placeholder }) => {
  return (
    <StyledInput type={type} onChange={onChange} placeholder={placeholder} />
  )
}

export default Input;