import { Route, Switch } from 'react-router-dom';
import './App.css';
import './assets/main.css'
import "./assets/style.css"
import DonorListPage from './Components/Page/DonorListPage';
import HomePage from './Components/Page/HomePage';
import SignUpPage from './Components/Page/SignUpPage';
import LoginPage from './Components/Page/LoginPage';
import { Provider } from 'react-redux';
import store from "./Components/Redux/Store"
import FetchAllUsers from "./Components/FetchData/FetchAllUsers"

function App() {
  return (
    <Provider store={store}>
      <FetchAllUsers />
      <section className="main_content h-screen">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/donor_list">
            <DonorListPage />
          </Route>
          <Route path="/sign_up">
            <SignUpPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </section>
    </Provider>
  );
}

export default App;
