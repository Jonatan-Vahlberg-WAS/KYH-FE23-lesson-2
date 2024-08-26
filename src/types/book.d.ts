

type Book = {
    author_name?: string[];
    cover_i: number;
    key: string;
    first_sentence: string[];
    title: string;
    ratings_average?: number;
    first_publish_year: number;
    subject: string[];

    cover?: {
        small: string;
        medium: string;
        large: string;
    }
}

type BookListResponse = {
    numFound: number;
    start: number;
    docs: Book[]
}