import { routePaths } from './constants/routes';
import ContactsView from './views/ContactsView';
import ContactView from './views/ContactView';
import ApplicationContextProvider from './context';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

function App() {
  return (
    <ApplicationContextProvider>
      <Router>
        <Routes>
          <Route
            path={routePaths.root}
            element={<Navigate replace to={routePaths.contacts} />}
          />
          <Route path={routePaths.contacts} element={<ContactsView />} />
          <Route path={routePaths.contact} element={<ContactView />} />
        </Routes>
      </Router>
    </ApplicationContextProvider>
  );
}

export default App;
