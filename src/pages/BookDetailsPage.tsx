import { Link, useParams } from "react-router-dom";
import BookDetails from "../components/BookDetails";

const BookDetailsPage = () => {
  const { bookId } = useParams();

  return (
    <div>
      <Link to="/books">Back to All Books</Link>
      <BookDetails bookId={bookId} />
    </div>
  );
};

export default BookDetailsPage;
