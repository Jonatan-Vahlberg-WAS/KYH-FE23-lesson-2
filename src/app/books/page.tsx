import BookCard from "@/components/Book";

export async function getBooks(query: string = "") {
  "use server";
  const url = new URL("http://localhost:3000/api/books");
  url.searchParams.append("q", query);

  const response = await fetch(url, {
    headers: {
      type: "application/json",
    },
  });

  if (!response.ok) {
    return [];
  }
  const books: Book[] = await response.json();
  return books;
}

export default async function BookList(props: PageProps) {
  const books = await getBooks(props.searchParams.q);
  console.log("BOOKS", books);
  return (
    <div>
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
}
