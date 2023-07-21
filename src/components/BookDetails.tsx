import { useParams } from "react-router-dom";
import { useFetchBooksQuery } from "../store/bookApi";

const BookDetails = () => {
  const { bookId } = useParams();
  const { data: book, isLoading, isError } = useFetchBooksQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching book details.</div>;
  }

  const selectedBook = book.find((book) => book.id === parseInt(bookId));

  return (
    <div>
      <h2>{selectedBook.title}</h2>
      <p>Author: {selectedBook.author}</p>
      <p>Genre: {selectedBook.genre}</p>
      <p>Publication Date: {selectedBook.publicationDate}</p>
      <h3>Reviews</h3>
      <ul>
        {selectedBook.reviews.map((review) => (
          <li key={review.id}>
            <p>{review.text}</p>
            <p>By: {review.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
