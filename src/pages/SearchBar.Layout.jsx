import { useState, useEffect } from "react";
import "./SearchBar.Layout.css";

function SearchBar() {
    
    const [input, setInput] = useState('');

    useEffect(() => {
        (async() => {
            const results = await fetch("https://dummyjson.com/products");
            const parsedResults = await results.json();
            console.log("parsedResults", parsedResults); 
        })
    })

    const inputHandler = (e) => {
        const inp = e.target;
        setInput(inp.value);

    }
    console.log("input",input);

    return(
        
        <div className="searchBarContainer">
            <input 
                className="searchBarInput" 
                onChange = {inputHandler}/>

            {/* <ul>
                {
                    input.map((inp) => {
                        return(
                            <>
                                <button 
                                    className = "suggestion"
                                    key = {inp.id}
                                    name = {inp.title}
                                >
                                    {inp.title}
                                </button>
                            </>
                        )
                    })
                }
            </ul> */}
        </div>
    )
}

export default SearchBar;