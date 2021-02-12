import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";


export const Context = createContext();

export function ContextController({ children }) {


const [state, setState] = useState([]);

useEffect(() => {
    const fetchItems = async () => {
        const result = await axios(
          'https://api.mercadolibre.com/sites/MLA/search?q=%20:query'
        )

        console.log(result.data.results)
        setState(result.data.results);
    }
    fetchItems()
}, [])

console.log(state);

return(
    <Context.Provider value={{state}}>
        {children}
    </Context.Provider>

)
}