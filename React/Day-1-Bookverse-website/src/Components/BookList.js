import { useState } from "react";
import BookCard from "./BookCard";

function BookList() {
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState("");

  const books = [
    { id: 1, title: "Atomic Habits", author: "James Clear", price: 399 },
    { id: 2, title: "The Alchemist", author: "Paulo Coelho", price: 299 },
    { id: 3, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 350 },
    { id: 4, title: "Think Like a Monk", author: "Jay Shetty", price: 420 }
  ];

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>📖 Featured Books</h2>

      {/* Search Input (Controlled Component) */}
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* View Toggle Buttons */}
      <div className="buttons">
        <button onClick={() => setView("grid")}>Grid View</button>
        <button onClick={() => setView("list")}>List View</button>
      </div>

      {/* Book Cards */}
      <div className={view === "grid" ? "book-container grid" : "book-container list"}>
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} view={view} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
