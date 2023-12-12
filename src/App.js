import React, {useState, useEffect} from "react";

import './App.css';
import SearchIcon from './assets/icon/search.svg';
import BookCard from './components/BookCard';
import {BookListAPI} from "./api/book/BookListAPI";

const App = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
       const fetchData = async () => {
      try {
        // Fetching the data using the BookListAPI
        const data = await BookListAPI();
        setBooks(data.results);
      } catch (error) {
        console.error('Error fetching books:', error.message);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
    }, []);
    return <div className='app'>
        <h1>book Land</h1>

        <div className="search">
            <input type="text" placeholder="Search for a book" value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}/>
            <img
                src={SearchIcon}
                alt="Search"
                onClick={() => BookListAPI()}
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

export default App;