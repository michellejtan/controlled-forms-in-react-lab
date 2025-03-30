import { useState } from 'react';



const Bookshelf = () => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    });


    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    {/* Form will go here */}
                </div>

                <div className="bookCardsDiv">
                    {books.map(book => (
                        <div className='bookCard'>
                            <h2>{book.title}</h2>
                            <p>{book.author}</p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default Bookshelf;