import React from "react";
import { Link } from "react-router-dom";

const bookCard = ({book}) => {
    return (
        <div className='book'>
            <Link to={`/books/${book.id}`}>
                <div>
                    <p>{book.publication_year}</p>
                </div>
                <div>
                    <img src='https://picsum.photos/400/400/' alt={book.title}/>
                </div>
                <div>
                    <span>{book.author.first_name + ' ' + book.author.last_name}</span>
                    <h3>{book.title}</h3>
                </div>
            </Link>
        </div>
    )
}

export default bookCard;