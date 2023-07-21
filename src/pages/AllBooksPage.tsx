import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllBooks } from "../store/bookSlice";

const AllBooksPage = () => {
  const allBooks = useSelector(selectAllBooks);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterGenre, setFilterGenre] = useState("");
  const [filterPublicationYear, setFilterPublicationYear] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterGenre = (e) => {
    setFilterGenre(e.target.value);
  };

  const handleFilterPublicationYear = (e) => {
    setFilterPublicationYear(e.target.value);
  };

  const filteredBooks = allBooks.filter((book) => {
    const titleMatch = book.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const authorMatch = book.author
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const genreMatch = filterGenre === "" || book.genre === filterGenre;
    const publicationYearMatch =
      filterPublicationYear === "" ||
      new Date(book.publicationDate).getFullYear().toString() ===
        filterPublicationYear;

    return titleMatch || authorMatch;
  });

  return (
    <div>
      <h1>All Books</h1>
      <div>
        <input
          type="text"
          placeholder="Search by title or author"
          onChange={handleSearch}
        />
        <select value={filterGenre} onChange={handleFilterGenre}>
          <option value="">All Genres</option>

          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
        </select>
        <select
          value={filterPublicationYear}
          onChange={handleFilterPublicationYear}
        >
          <option value="">All Years</option>

          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>
              <h2>{book.title}</h2>
            </Link>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Publication Date: {book.publicationDate}</p>
          </li>
        ))}
      </ul>
      <Link to="/add-new-book">Add New Book</Link>
    </div>
  );
};

export default AllBooksPage;
