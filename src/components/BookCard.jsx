import React from "react";

const bookCard = ({book}) => {
    return (
        <div className='book'>
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
        </div>
    )
}

export default bookCard;