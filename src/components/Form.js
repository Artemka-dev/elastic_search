import React from "react";

function Form({ changeValue }) {
    return(
        <input placeholder="Поиск постов" type="text" onChange={changeValue} />
    );
}

export default Form;