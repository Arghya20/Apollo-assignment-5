import BookList from "../components/BookList";
import BookFilter from "../components/BookFilter";

const AllBooksPage = () => {
  return (
    <div>
      <h1>All Books</h1>
      <BookFilter />
      <BookList />
    </div>
  );
};

export default AllBooksPage;