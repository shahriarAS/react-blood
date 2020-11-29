import { Route, Switch } from 'react-router-dom';
import './App.css';
import './assets/main.css'
import "./assets/style.css"
import DonorListPage from './Components/Page/DonorListPage';
import HomePage from './Components/Page/HomePage';
import SignUpPage from './Components/Page/SignUpPage';
import UpdateProfilePage from './Components/Page/UpdateProfilePage';
import LoginPage from './Components/Page/LoginPage';
import { Provider, useSelector } from 'react-redux';
import store from "./Components/Redux/Store"
import ReactLoading from 'react-loading';

function App() {
  const DataFetch = useSelector(state => state.DataFetch)
  if (DataFetch) {
    return (
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
          <Route path="/update_profile">
            <UpdateProfilePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </section>
    );
  }
  else {
    return (
      <section className="main_content h-screen bg-green-400 text-white flex justify-center items-center">
        <ReactLoading type="bars" color="#000" />
      </section>
    )
  }
}

export default App;
