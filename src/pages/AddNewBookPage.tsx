import { Form } from "react-router-dom";

const AddNewBookPage = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newBookData = {
      title: formData.get("title"),
      author: formData.get("author"),
      genre: formData.get("genre"),
      publicationDate: formData.get("publicationDate"),
    };

  };

  return (
    <div>
      <h1>Add New Book</h1>
      {
        <form>
            <h2>add new book</h2>
        </form>
      }
    </div>
  );
};

export default AddNewBookPage;
