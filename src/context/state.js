import { sort } from "../constants/sort"

const initialState = {
  contacts: [],
  loading: true,
  searchResult: [],
  errorText: '',
  sortBy: sort.default,
}

export {
  initialState
}