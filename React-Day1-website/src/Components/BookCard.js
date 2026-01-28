function BookCard({ book, view }) {
  return (
    <div className={view === "grid" ? "book-card grid" : "book-card list"}>
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Price:</strong> ₹{book.price}</p>
    </div>
  );
}

export default BookCard;
