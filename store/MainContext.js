import { createContext } from "react";
import { useState } from "react";


export const mainContext = createContext({
    all: null,
    setAll: function(){},
})


export  function ContextProvider(props) {
    const [all, setAll] = useState([1,2,3,4,5,6,7])


    const allHandler = (data) => {
        setAll(data)
    }
    const context = {
        all: all,
        setAll: allHandler
    }


    return (
        <mainContext.Provider value={context}>
                {props.children}
        </mainContext.Provider>
          
    );
}
