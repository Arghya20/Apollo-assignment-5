import { useFetchBooksQuery } from "../store/bookApi";

const BookFilter = () => {
  const { data: books, isLoading, isError } = useFetchBooksQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [publicationYearFilter, setPublicationYearFilter] = useState("");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching books.</div>;
  }

  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (genreFilter === "" ||
        book.genre.toLowerCase() === genreFilter.toLowerCase()) &&
      (publicationYearFilter === "" ||
        new Date(book.publicationDate).getFullYear().toString() ===
          publicationYearFilter)
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={genreFilter}
        onChange={(e) => setGenreFilter(e.target.value)}
      >
        <option value="">All Genres</option>
        {Array.from(new Set(books.map((book) => book.genre))).map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <select
        value={publicationYearFilter}
        onChange={(e) => setPublicationYearFilter(e.target.value)}
      >
        <option value="">All Publication Years</option>
        {Array.from(
          new Set(
            books.map((book) =>
              new Date(book.publicationDate).getFullYear().toString()
            )
          )
        ).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Publication Date: {book.publicationDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookFilter;
