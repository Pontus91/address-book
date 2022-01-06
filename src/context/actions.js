/**
 * All ActionTypes for the context
 * Using Uppercase on types for non mismatch
 */
const actionTypes = {
  UPDATE_CONTACTS: 'UPDATE_CONTACTS',
  UPDATE_ERRORTEXT: 'UPDATE_ERRORTEXT',
  UPDATE_SEARCH_RESULT: 'UPDATE_SEARCH_RESULT',
  UPDATE_SORTING: 'UPDATE_SORTING',
}

/**
 * Updates contacts state
 * @param users
 */
const updateContactsData = users => ({
  type: actionTypes.UPDATE_CONTACTS,
  payload: users,
})

/**
 * Updates error text if fetch fails
 * @param errorMessage 
 */
const updateErrorText = errorMessage => ({
  type: actionTypes.UPDATE_ERRORTEXT,
  payload: errorMessage,
})

/**
 * Updates the search result
 * @param searchResult  
 */
const updateSearchResult = searchResult => ({
  type: actionTypes.UPDATE_SEARCH_RESULT,
  payload: searchResult,
})

/**
 * Updates sorting
 * @param sortType 
 */
const updateSortBy = sortType => ({
  type: actionTypes.UPDATE_SORTING,
  payload: sortType,
})

export {
  actionTypes,
  updateContactsData,
  updateErrorText,
  updateSearchResult,
  updateSortBy
}