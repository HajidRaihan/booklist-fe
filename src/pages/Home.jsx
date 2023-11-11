import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { NavigationBar } from "../components/NavigationBar";

import { getAllBooks } from "../modules/fetch";

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getAllBooks();
      setBooks(books);
    };
    fetchBooks();
  }, []);
  return (
    <>
      <NavigationBar />

      <div className="flex flex-wrap justify-center mt-5 gap-5">
        {books?.books?.map((book) => {
          return <BookCard key={`${book.id} ${book.title}`} {...book} />;
        })}
      </div>
    </>
  );
};

export default Home;
