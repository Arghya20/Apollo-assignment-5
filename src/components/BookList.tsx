import { useFetchBooksQuery } from "../store/bookApi";

const BookList = () => {
  const { data: books, isLoading, isError } = useFetchBooksQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching books.</div>;
  }

  return (
    <div>
      <h2>Top 10 Recently Added Books</h2>
      <ul>
        {books.slice(0, 10).map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Publication Date: {book.publicationDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
