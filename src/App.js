import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import './App.css';
import BookList from "./pages/book/BookList";
import BookDetails from "./pages/book/BookDetails";

const App = () => {

    return <div className='app'>
        <Link to={`/`}>
        <h1>book Land</h1>
        </Link>

        <Routes>
            <Route strict path="/" element={<BookList />} />
            <Route path="/books/:bookId" element={<BookDetails />} />
        </Routes>
    </div>;
}

export default App;