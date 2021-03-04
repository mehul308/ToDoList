import React, { useState } from 'react';
import ToDoList from "./ToDoList";
const App = () =>{

    const [inputList, setinputList] = useState(" ");
    const [Items,setItems] = useState([]);

    const itemEvent =(event) => {
        setinputList(event.target.value);
    };


    const listOfitems = () => {
        setItems((oldItems) =>{
            return [...oldItems, inputList];
        });
        setinputList("");
    };

    const deleteItem = ()=>{
        console.log ("deleted");
    }

    return (
    <>
        <div className ="main_div">
            <div className ="centre_div">
            <br />
            <h1> ToDo List </h1>
            <br />
            <input type ="text" placeholder="Add a Item" 
            value = {inputList}
            onChange={itemEvent} />
            <button onClick={listOfitems}> + </button>


        <ol>
            {/*<li> {inputList} </li>*/}

            { Items.map( (itemval, index ) => {
                return <ToDoList key={index} 
                id={index} text={itemval} 
                onSelect ={deleteItem} />;
            })}

        </ol>
            </div>
        </div>
   </>
);
};

export default App;