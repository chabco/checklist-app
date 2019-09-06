import React from 'react';

function Form() {
    return(
    <div className="container border">
        <form>
            <input type='text' placeholder="Search..."/>
            <div>
                <input type="checkbox" id="myCheck"/> Only show items in stock
            </div>
        </form>
    </div>
        
    )
}

export default Form;