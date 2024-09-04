import BookItem from "./BookItem";

const BookGrid = ({ books, onFav }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.length > 0 ? (
        books.map((book) => (
          <BookItem key={book.id} book={book} onFav={onFav} />
        ))
      ) : (
        <p>No book found</p>
      )}
    </div>
  );
};

export default BookGrid;
