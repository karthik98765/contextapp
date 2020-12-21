import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books] = useState([
        {title: 'name of the wind', id: 1},
        {title: 'the wy of kings', id: 2},
        {title: 'the final empire', id: 3},
        {title: 'the hero of ages', id: 4}
    ]);
    return (
        <BookContextProvider value={{books}}>
            {props.children}
        </BookContextProvider>    
    );
}
 
export default BookContextProvider;