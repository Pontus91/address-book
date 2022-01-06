import { useReducer, useEffect, createContext } from 'react';
import { updateContactsData, updateErrorText } from './actions';
import { applicationReducer } from './reducer';
import { initialState } from './state';

export const ApplicationContext = createContext({
  state: initialState,
  dispatch: () => null,
});

const ApplicationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(applicationReducer, initialState);

  /**
   * Fetching users from API and excluding data that we dont need.
   * Also using seed to make sure we get the same users.
   */
  useEffect(() => {
    fetch(
      'https://randomuser.me/api/?page=1&results=100&seed=employees&exc=login,gender,cell,registered,id',
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((data) => {
        /**
         * Creating my own ID's for the users since you cant fetch
         * a user by ID and the creators have recommended that you dont use id
         * as a primary key, some users ID from the API is also broken
         */
        const contacts = data.results.map((user, i) => {
          return { ...user, id: (user.id = i + 1) };
        });
        dispatch(updateContactsData(contacts));
      })
      .catch((error) => {
        dispatch(updateErrorText(error));
      });
  }, []);

  return (
    <ApplicationContext.Provider value={{ state, dispatch }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
