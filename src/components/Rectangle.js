import React from 'react';

function Rectangle(props){
    const [color, setColor]=React.useState("green");


    return(
        <div className={"rectangle"} style={style}>
            <h1>{name}</h1>
            <button onClick={addUp}>Number is {number}</button>
        </div>
    )
}
export default Rectangle;