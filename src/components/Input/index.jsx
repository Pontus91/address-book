import {
  StyledInput
} from './styled'

const Input = (props) => {
  const getSearchValue = e => props.callback(e.target.value);
  return (
    <StyledInput onChange={getSearchValue} placeholder={props.placeholder} value={props.searchTerm} />
  )
}

export default Input;