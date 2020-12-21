import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { ThemeContext } from '../context/ThemeContext';

const Booklist = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { books } = useContext(BookContext)
    const theme = isLightTheme ? light : dark;
    return (
        <div className="book-list" style={{ color: theme.syntax, background: theme.background}}>
            <ul>
                {books.map(book => {
                    return (
                        <li key={book.id} style={{ background: theme.ui }}>{ book.title }</li>
                    )
                })}
            </ul>
        </div>
    );
}
 
export default Booklist;