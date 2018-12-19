import React from 'react';
import axios from 'axios';
import BookAddToInstComp from './BookAddToInstComp';
class BookAddToInstCont extends React.Component {

    constructor(){
        super();
        this.state = {
            books: []
        }
    }
    
    render() {
        bookAddToInstComp = this.state.books.map(book => {
            return <div>
                <BookAddToInstComp 
                    book = {book}/>
            </div>
        })
        return <table>
            {bookAddToInstComp}
        </table>
    }
}

export default BookAddToInstCont