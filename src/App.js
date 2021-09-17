import { BrowserRouter as Router , Switch, Route, Redirect } from 'react-router-dom';
import "./theme/globals.scss";
// Global Component
import { Layout } from "./components/layout/Layout";
// Components
import {Frontpage} from './pages/frontpage/Frontpage';
import { Loginpage } from './pages/Loginpage/Loginpage';
import { Adminpage } from './pages/Adminpage/Adminpage';



import {AppContextProvider} from './Context/Context';
import { HousingSearch } from "./pages/housingSearch/HousingSearch";
import { StaffPage } from "./pages/staffPage/StaffPage";
import { SearchPage } from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <AppContextProvider>
    <Router>
      <Layout class="layout-main">
      <Switch>
        <Route path="/frontpage">
          <Frontpage />
        </Route>
        <Route path="/housingsearch">
          <HousingSearch />
        </Route>
        <Route path="/staffpage">
          <StaffPage />
        </Route>
        <Route path="/Login">
          <Loginpage />
        </Route>
        <Route path="/Admin">
          <Adminpage />
        </Route>
        <Route path="/seachpage">
          <SearchPage />
        </Route>
        <Route exact path="/">
          <Redirect to="/frontpage"></Redirect>
        </Route>
        {/* skal være i bunden ellers rammer path den samme / */}
        <Route path="/">
          <h2>404 siden findes ikke</h2>
        </Route>
      </Switch>
    </Layout>
    </Router>
    </AppContextProvider>
  );
}

export default App;
