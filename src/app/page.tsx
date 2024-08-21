import Image from "next/image";

type Author = {
  fullName: string;
  dateOfBirth: string;
}

type Pet =
  | { kind: 'dog'; name: string; breed: string }
  | { kind: 'cat'; name: string; age: number };

type Book = {
  id: string;
  author: Author;
  title: string;
  yearOfPublication: number;
}

export default function Home() {
  console.log("Test")
  const stein: Author =  {
    fullName: "R.L Stein",
    dateOfBirth: "1901-01-01"
  }

  const book: Book = {
    id: "1",
    author: stein,
    title: "Night of the Living Dummy",
    yearOfPublication: 1993,
  }
  console.log(book)
  
  return (
    <main>
      <pre>
        {JSON.stringify(book, null, 2)}
      </pre>
    </main>
  );
}
