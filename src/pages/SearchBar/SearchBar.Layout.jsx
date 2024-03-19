import { useState} from "react";
import { useSelector } from "react-redux";

import "./SearchBar.Layout.css";

function SearchBar() {
    const [search, setSearch ] = useState();
    const [suggestionList, setSuggestList] = useState([]);
    const { data}  = useSelector((state) => state.products);

    const changeHandler = (e) => {
        const val = e.target.value;
        
        setSearch(val);

        const res = data.filter (
            (item ) => item.title.toLowerCase().includes(val.toLowerCase())
        );
        setSuggestList(res);
    }
    console.log(search);
    // if( !isLoading ){
    //     if( Array.isArray(data) ){
    //         data.filter((item ) => {
    //             console.log( item.title);
    //         })
    //     }
    // }


    return (
        <div className = "searchbar-container">
            <div className="searchbar-section" >
            {/* <p className ="chips">Hi <button className="chip-remove"> x</button></p> */}
            {/* <p className ="chips">Leanne x</p>  */}

                <input 
                    className = "searchbar-input"
                    type="text" 
                    onChange = {changeHandler} 

                    placeholder = ""
                    //value = {search} 
                    />

            </div>  
            <ul>
            {Array.isArray(suggestionList) && suggestionList.map( 
                (searchItem) => {
                return (
                    <>    
                        <button className="suggestion-container"  
                                key={searchItem.id} 
                                name = {searchItem.name} 
                                 // onClick = {addHandler}
                                >
                                {searchItem.title}
                                
                        </button>
                    </>
                    );
                }
            )}
            </ul>
        </div>
    )
}

export default SearchBar;