import "./theme/globals.scss";
// Global Component
import { Layout } from "./components/layout/Layout";
// Components
import {Frontpage} from './pages/frontpage/Frontpage';
import LoginPage from './pages/loginPage/LoginPage';
import Admin from "./pages/admin/Admin"
//
import { BrowserRouter as Router , Switch, Route, Redirect } from 'react-router-dom';


import {AppContextProvider} from './Context/ContextProvider';
import { HousingSearch } from "./pages/housingSearch/HousingSearch";

function App() {
  return (
    <Layout class="layout-main">
    <AppContextProvider>
    <Router>
      <Switch>
        <Route path="/frontpage">
          <Frontpage />
        </Route>
        <Route path="/housingsearch">
          <HousingSearch />
        </Route>
        <Route path="/loginpage">
          <LoginPage />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route exact path="/">
          <Redirect to="/frontpage"></Redirect>
        </Route>
        {/* skal være i bunden ellers rammer path den samme / */}
        <Route path="/">
          <h2>404 siden findes ikke</h2>
        </Route>
      </Switch>
    </Router>
    </AppContextProvider>
    </Layout>
  );
}

export default App;
