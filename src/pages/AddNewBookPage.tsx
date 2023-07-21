import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addNewBook } from "../store/bookSlice";

const AddNewBookPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [newBookData, setNewBookData] = useState({
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewBook(newBookData));
    history.push("/books");
  };

  return (
    <div>
      <h1>Add New Book</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={newBookData.title}
          onChange={(e) =>
            setNewBookData((prevData) => ({
              ...prevData,
              title: e.target.value,
            }))
          }
        />
        <input
          type="text"
          placeholder="Author"
          value={newBookData.author}
          onChange={(e) =>
            setNewBookData((prevData) => ({
              ...prevData,
              author: e.target.value,
            }))
          }
        />
        <input
          type="text"
          placeholder="Genre"
          value={newBookData.genre}
          onChange={(e) =>
            setNewBookData((prevData) => ({
              ...prevData,
              genre: e.target.value,
            }))
          }
        />
        <input
          type="date"
          placeholder="Publication Date"
          value={newBookData.publicationDate}
          onChange={(e) =>
            setNewBookData((prevData) => ({
              ...prevData,
              publicationDate: e.target.value,
            }))
          }
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddNewBookPage;
