import React from 'react';

function Block(props){
    const [name]=React.useState(props.name);
    const [number, setNumber]=React.useState(props.age);
    const [backColor, setbackColor]=React.useState(props.color);
    const [borderColor, setColor]=React.useState(props.color);

    let style={
        backgroundColor:backColor,
        borderColor:borderColor,
        height:"100px",
        width:"100px",
        borderStyle:"solid",
        borderWeight:"2px",

    };

    return(
        <div className={"block"} style={style}>
        </div>
    )
}
export default Block;