import { Spinner } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookCardDetail from "../components/BookCardDetail";
import { deleteBook, getBookDetailById } from "../modules/fetch";

const BookDetail = () => {
  const [book, setBook] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookDetailById(id);
        setBook(response.book);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBook();
  }, [id]);

  const handleDeleteBook = async () => {
    try {
      await deleteBook(id);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="flex justify-center mt-10">
      {!loading ? (
        <BookCardDetail handleDeleteBook={handleDeleteBook} book={book} id={id} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default BookDetail;
