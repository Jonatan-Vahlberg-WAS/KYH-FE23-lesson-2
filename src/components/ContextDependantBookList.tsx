import { useBooks } from "@/context/books";
import BookCard from "./Book";

function ContextDependantBookList() {
  const books = useBooks();
  return (
    <div>
      Books
      <div>
        {books.books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
}

export default ContextDependantBookList;
