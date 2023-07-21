import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Book Catalog System</h1>
      <Link to="/books">View Top 10 Recently Added Books</Link>
    </div>
  );
};

export default HomePage;
