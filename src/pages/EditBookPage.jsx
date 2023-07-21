import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const EditBookPage = () => {
  const { bookId } = useParams();
  const history = useHistory();
  const allBooks = useSelector((state) => state.books.list);

  const selectedBook = allBooks.find((book) => book.id === parseInt(bookId));

  if (!selectedBook) {
    return <div>Book not found</div>;
  }

  const [editedBook, setEditedBook] = useState(selectedBook);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedBooks = allBooks.map((book) => {
      if (book.id === parseInt(bookId)) {
        return editedBook;
      }
      return book;
    });

    dispatch(updateAllBooks(updatedBooks));

    history.push(`/books/${bookId}`);
  };

  const handleCancelEdit = () => {
    history.push(`/books/${bookId}`);
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={editedBook.title}
          onChange={(e) =>
            setEditedBook({ ...editedBook, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Author"
          value={editedBook.author}
          onChange={(e) =>
            setEditedBook({ ...editedBook, author: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Genre"
          value={editedBook.genre}
          onChange={(e) =>
            setEditedBook({ ...editedBook, genre: e.target.value })
          }
        />
        <input
          type="date"
          placeholder="Publication Date"
          value={editedBook.publicationDate}
          onChange={(e) =>
            setEditedBook({ ...editedBook, publicationDate: e.target.value })
          }
        />
        <button type="submit">Save Changes</button>
        <button type="button" onClick={handleCancelEdit}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditBookPage;
