import React from "react";

const MyProps = (props) => {
    console.log('MyProps is: ', props)
    return <h1>My Name is {props.name}</h1>
}

export default MyProps