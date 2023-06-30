import React from "react";


const currentyear = new Date().getFullYear();
function footer(){
    return <footer>
       <p> Copyright @ Nikhil kumar {currentyear}</p>
    </footer>
}
export default footer;