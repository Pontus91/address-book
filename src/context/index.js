import { useReducer, useEffect, createContext } from 'react';
import { updateContactsData, updateErrorText, updateLoading } from './actions';
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
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          'https://randomuser.me/api/?page=1&results=1000&seed=employees&exc=login,gender,cell,id',
          {
            method: 'GET',
          }
        );
        const data = await response.json();
        /**
         * Creating my own ID's for the users since you cant fetch
         * a user by ID and the creators have recommended that you dont use id
         * as a primary key, some users ID from the API is also broken
         */
         const contacts = data.results.map((user, i) => {
          return { ...user, id: (user.id = i + 1) };
        });
        dispatch(updateContactsData(contacts));
        dispatch(updateLoading(false));
      } catch (error) {
        dispatch(updateErrorText(error));
      }
    };
    fetchContacts();
  }, []);

  return (
    <ApplicationContext.Provider value={{ state, dispatch }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
