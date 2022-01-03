const actionTypes = {
  UPDATE_CONTACTS: 'UPDATE_CONTACTS',
  UPDATE_ERRORTEXT: 'UPDATE_ERRORTEXT',
}

/**
 * Updates contacts state
 * @param {*} users
 */
const updateContactsData = users => ({
  type: actionTypes.UPDATE_CONTACTS,
  payload: users,
})

/**
 * Updates error text if fetch fails
 * @param {*} errorMessage 
 */
const updateErrorText = errorMessage => ({
  type: actionTypes.UPDATE_ERRORTEXT,
  payload: errorMessage,
})

export {
  actionTypes,
  updateContactsData,
  updateErrorText,
}