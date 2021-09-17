import { BrowserRouter as Router , Switch, Route, Redirect } from 'react-router-dom';
import "./theme/globals.scss";
// Global Component
import { Layout } from "./components/Layout/Layout";
// Components
import { Frontpage } from './Pages/Frontpage/Frontpage';
import { Loginpage } from './Pages/Loginpage/Loginpage';
import { Adminpage } from './Pages/Adminpage/Adminpage';



import {AppContextProvider} from './Context/Context';
import { HousingSearch } from "./Pages/HousingSearch/HousingSearch";
import { StaffPage } from "./Pages/StaffPage/StaffPage";
import { SearchPage } from "./Pages/SearchPage/SearchPage";

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
