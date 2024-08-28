import { BookProvider } from "@/context/books";
import { PropsWithChildren } from "react";


function Providers({ children }: PropsWithChildren) {
  return (
    <BookProvider>
        {children}
    </BookProvider>
  );
}

export default Providers;