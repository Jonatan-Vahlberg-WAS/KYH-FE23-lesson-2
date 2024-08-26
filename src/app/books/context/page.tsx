"use client"

import ContextDependantBookList from "@/components/ContextDependantBookList";
import { BookProvider } from "@/context/books";

export default function BookListContext() {
  return (
    <BookProvider>
      <ContextDependantBookList/>
    </BookProvider>
  );
}
