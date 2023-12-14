import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BookDetailsAPI } from "../../api/book/BookDetailsAPI";

function BookDetails() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetching the data using the BookListAPI
                const data = await BookDetailsAPI(bookId);
                setBook(data);
            } catch (error) {
                console.error('Error fetching books:', error.message);
            }
        };

        fetchData();
    }, []);


  return (
    <div className={"app white-text"}>

      {book ? (
        <>
          <img
            src="https://picsum.photos/400/400/"
            alt={book.title}
            style={{ maxWidth: "100%", maxHeight: "300px", marginBottom: "1rem" }}
          />
          <div>
            <h3>{book.title}</h3>
          </div>
          <br></br>
          <p className={"white"}>ISBN: {book.isbn}</p>
          <p>Publication Year: {book.publication_year}</p>
          <p>
            Author: {book.author.first_name} {book.author.last_name}
          </p>
          <p>Created At: {book.created_at}</p>
          <p>Updated At: {book.updated_at}</p>
          <p>Brief Summary: {book.brief_summary}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BookDetails;
