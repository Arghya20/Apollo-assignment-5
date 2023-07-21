import { useParams } from "react-router-dom";

const EditBookPage = () => {
  const { bookId } = useParams();

  const bookDetails = useSelector((state) =>
    state.books.list.find((book) => book.id === parseInt(bookId))
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedBookData = {
      title: formData.get("title"),
      author: formData.get("author"),
      genre: formData.get("genre"),
      publicationDate: formData.get("publicationDate"),
    };
  };

  return (
    <div>
      <h1>Edit Book</h1>
      {
        <form>
          <h1>edit book </h1>
        </form>
      }
    </div>
  );
};

export default EditBookPage;
