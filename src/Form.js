import React from 'react';

function Form() {
    return(
    <div className="border bg-dark text-white">
        <form>
            <input className="App" type='text' placeholder="Search..."/>
            <div>
                <input type="checkbox" id="myCheck"/> Only show items in stock
            </div>
        </form>
    </div>
        
    )
}

export default Form;