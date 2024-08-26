

class BookKit {

    static baseURL = "https://openlibrary.org/"
    static searchAppend = "search.json"

    static async getBooksFromQuery(query: string): Promise<BookListResponse> {
        const response = await fetch(`${this.baseURL}${this.searchAppend}?q=${query}`, {
            // headers: {
            //     // type: "application/json",
            // }
        })

        if(!response.ok) {
            console.log("ERROR: fetching books", response)
            throw new Error("Unable to fetch books")
        }

        const data: BookListResponse = await response.json()

        return data

    }

    static async getBookFromISBN(isbn: string) {}
}

export default BookKit;