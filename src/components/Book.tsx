
type BookCardProps = {
    book: Book
}

function BookCard({book}: BookCardProps) {
    const rating = book.ratings_average || 0;
    const authors = book.author_name || [""]
    return (
        <div className="p-4 rounded-md shadow-md">
            <h2>{book.title}</h2>
            <p>{authors.join(", ")}</p>
            <p>{rating.toFixed(1)}</p>
        </div>
    )
}

export default BookCard