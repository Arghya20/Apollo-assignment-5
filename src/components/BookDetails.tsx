import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFetchBooksQuery } from "../store/bookApi";
import ReviewForm from "./ReviewForm";

const BookDetails = () => {
  const { bookId } = useParams();
  const { data: book, isLoading, isError } = useFetchBooksQuery();
  const history = useHistory();

  const [reviews, setReviews] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedBookData, setEditedBookData] = useState({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching book details.</div>;
  }

  const selectedBook = book.find((book) => book.id === parseInt(bookId));

  const handleReviewSubmit = (reviewText) => {
    const newReview = {
      id: Date.now(),
      text: reviewText,
      author: "Anonymous",
    };
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  const handleEditBook = () => {
    setIsEditing(true);
    setEditedBookData({
      title: selectedBook.title,
      author: selectedBook.author,
      genre: selectedBook.genre,
      publicationDate: selectedBook.publicationDate,
    });
  };

  const handleSaveEdit = () => {
    history.push(`/books/${bookId}`);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleDeleteBook = () => {};

  return (
    <div>
      {isEditing ? (
        <div>
          <h2>Edit Book</h2>

          <form onSubmit={handleSaveEdit}>
            <input
              type="text"
              value={editedBookData.title}
              onChange={(e) =>
                setEditedBookData((prev) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
            />
            <input
              type="text"
              value={editedBookData.author}
              onChange={(e) =>
                setEditedBookData((prev) => ({
                  ...prev,
                  author: e.target.value,
                }))
              }
            />
            <input
              type="text"
              value={editedBookData.genre}
              onChange={(e) =>
                setEditedBookData((prev) => ({
                  ...prev,
                  genre: e.target.value,
                }))
              }
            />
            <input
              type="date"
              value={editedBookData.publicationDate}
              onChange={(e) =>
                setEditedBookData((prev) => ({
                  ...prev,
                  publicationDate: e.target.value,
                }))
              }
            />
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancelEdit}>
              Cancel
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h2>{selectedBook.title}</h2>
          <p>Author: {selectedBook.author}</p>
          <p>Genre: {selectedBook.genre}</p>
          <p>Publication Date: {selectedBook.publicationDate}</p>
          <h3>Reviews</h3>
          <ul>
            {selectedBook.reviews.concat(reviews).map((review) => (
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
      )}
    </div>
  );
};

export default BookDetails;
