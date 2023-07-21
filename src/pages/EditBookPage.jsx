import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateBook } from "../store/bookSlice";

const EditBookPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { bookId } = useParams();

  const bookToEdit = useSelector((state) =>
    state.books.list.find((book) => book.id === parseInt(bookId))
  );

  const [editedBookData, setEditedBookData] = useState(bookToEdit);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook(editedBookData));
    history.push(`/books/${bookId}`);
  };

  return (
    <div>
      <h1>Edit Book</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={editedBookData.title}
          onChange={(e) =>
            setEditedBookData((prevData) => ({
              ...prevData,
              title: e.target.value,
            }))
          }
        />
        <input
          type="text"
          placeholder="Author"
          value={editedBookData.author}
          onChange={(e) =>
            setEditedBookData((prevData) => ({
              ...prevData,
              author: e.target.value,
            }))
          }
        />
        <input
          type="text"
          placeholder="Genre"
          value={editedBookData.genre}
          onChange={(e) =>
            setEditedBookData((prevData) => ({
              ...prevData,
              genre: e.target.value,
            }))
          }
        />
        <input
          type="date"
          placeholder="Publication Date"
          value={editedBookData.publicationDate}
          onChange={(e) =>
            setEditedBookData((prevData) => ({
              ...prevData,
              publicationDate: e.target.value,
            }))
          }
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditBookPage;
