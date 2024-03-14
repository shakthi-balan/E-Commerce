import "./Header.Layout.css"
import SearchBar from "./SearchBar.Layout";

function HeaderLayout(){
  
    {/* <div class="logo">Your Logo</div> */}
    
    return (
        <div className ="headerLayout">
            <header>
                    <h1>Logo</h1>
                    <SearchBar/>
                    <p> Cart</p>  
            </header>
            
        </div>
    )
    
        
   
}

export default HeaderLayout;