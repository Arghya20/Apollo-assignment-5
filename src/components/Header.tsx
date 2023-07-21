import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">All Books</Link>
          </li>
          {!isLoggedIn ? (
            <>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </>
          ) : (
            <li>
              <button onClick={onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
