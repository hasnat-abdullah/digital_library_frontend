import React, {useEffect, useState} from "react"
import {Route, Routes, useParams} from "react-router-dom"
import {BookListAPI} from "../../api/book/BookListAPI";
import SearchIcon from "../../assets/icon/search.svg";
import BookCard from "../../components/BookCard";

// import {BookDetailsAPI} from "../api/book/BookDetailsAPI";

function BookList() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchBookList();
    }, []);

    const fetchBookList = async (title) => {
        try {
            const data = await BookListAPI(title);
            setBooks(data.results);
        } catch (error) {
            console.error('Error fetching books:', error.message);
        }
    };


    return <div className='app'>

        <div className="search">
            <input type="text" placeholder="Search for a book" value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}/>
            <img
                src={SearchIcon}
                alt="Search"
                onClick={() => fetchBookList(searchTerm)}
            />
        </div>

        {
            books?.length > 0 ? <div className="container">
                {books.map((book) => (
                        <BookCard book={book}/>
                    )
                )}
            </div> : <div className="empty">
                <h2>No books found</h2>
            </div>
        }

    </div>;
}

export default BookList;