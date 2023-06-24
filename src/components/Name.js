import React,{useState} from "react";

const Name =()=>{
    let [curr,setCurr] = useState("");
    function fun(event){
        setCurr(event.target.value);
    }
    return (
        <div>
            <P>Enter your name: </P>
            <input onChange={fun} ></input>
            <p>Hello {curr}! </p>
        </div>
    )
}
export default Name;