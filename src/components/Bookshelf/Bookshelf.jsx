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
    const handleInputChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value });
        formHasMissingData    };

    const handleSubmit = (event) => {
        event.preventDefault(); //prevent the default behavior of submitting a form
        // Set our book state with new book at the time of submission
        setBooks([...books, newBook]);
        // Reset title and author state to clear our form inputs
        setNewBook({ title: '', author: '' });
    };

    const formHasMissingData = !Object.values(newBook).every(Boolean);


    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    {/* Form will go here */}
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title">Ttitle: </label>
                        <input
                            id="title"
                            name="title"
                            value={newBook.title}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="author">Author: </label>
                        <input
                            id="author"
                            name="author"
                            value={newBook.author}
                            onChange={handleInputChange}
                        />
                        <button type="submit" disabled={formHasMissingData}>
                            Add Book
                        </button>
                    </form>
                </div>

                <div className="bookCardsDiv">
                    {books.map((book, index) => (
                        <div key={index} className='bookCard'>
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