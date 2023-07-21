import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ReviewForm from "../components/ReviewForm";

const BookDetailsPage = () => {
  const { bookId } = useParams();
  const history = useHistory();
  const allBooks = useSelector((state) => state.books.list);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const selectedBook = allBooks.find((book) => book.id === parseInt(bookId));

  if (!selectedBook) {
    return <div>Book not found</div>;
  }

  const [reviews, setReviews] = useState(selectedBook.reviews || []);

  const handleReviewSubmit = (reviewText) => {
    const newReview = {
      id: Date.now(),
      text: reviewText,
      author: "Anonymous",
    };
    setReviews((prevReviews) => [...prevReviews, newReview]);

    const updatedBooks = allBooks.map((book) => {
      if (book.id === parseInt(bookId)) {
        return { ...book, reviews: [...reviews, newReview] };
      }
      return book;
    });
  };

  const handleEditBook = () => {
    history.push(`/edit-book/${bookId}`);
  };

  const handleDeleteBook = () => {
    history.push("/books");
  };

  return (
    <div>
      <h2>{selectedBook.title}</h2>
      <p>Author: {selectedBook.author}</p>
      <p>Genre: {selectedBook.genre}</p>
      <p>Publication Date: {selectedBook.publicationDate}</p>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.text}</p>
            <p>By: {review.author}</p>
          </li>
        ))}
      </ul>

      {isLoggedIn && <ReviewForm onSubmitReview={handleReviewSubmit} />}

      {isLoggedIn && (
        <>
          <button onClick={handleEditBook}>Edit Book</button>
          <button onClick={handleDeleteBook}>Delete Book</button>
        </>
      )}
    </div>
  );
};

export default BookDetailsPage;
