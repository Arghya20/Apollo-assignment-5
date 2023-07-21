import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import HomePage from "./pages/HomePage";
import AllBooksPage from "./pages/AllBooksPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import AddNewBookPage from "./pages/AddNewBookPage";
import EditBookPage from "./pages/EditBookPage";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/signin">
          {isLoggedIn ? <Redirect to="/" /> : <LoginPage />}
        </Route>
        <Route path="/signup">
          {isLoggedIn ? <Redirect to="/" /> : <RegistrationPage />}
        </Route>
        <ProtectedRoute path="/books" exact component={AllBooksPage} />
        <ProtectedRoute path="/books/:bookId" component={BookDetailsPage} />
        <ProtectedRoute path="/add-new-book" component={AddNewBookPage} />
        <ProtectedRoute path="/edit-book/:bookId" component={EditBookPage} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <ToastContainer />
    </Router>
  );
};

export default App;
