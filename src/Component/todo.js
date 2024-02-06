import React, { useState } from "react";
import TodoList from "./TodoList";
const Todo = () => {

    const [inputList, setInputList] = useState("")
    const [Items, setItems] = useState([])

    const item = (event) => {
        setInputList(event.target.value);
    };


    const addList = () => {

        setItems((olditem) => {
            return [...olditem, inputList];
        });
        setInputList("")
    };


    
    const deleteItems =(id)=>{
        setItems((olditem)=>{

            return olditem.filter((arrElem,index)=>{
                return index !== id;
            });
        });
    }

    return <>



        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>ToDo List</h1>

                <br />
                <input type="text" placeholder="Add a Item" onChange={item}

                    value={inputList}
                ></input>
                <button onClick={addList}> + </button>
                <ol>


                    {

                        Items.map((itemval, index) => {




                            return <TodoList
                                key={index}
                                id={index}
                                text={itemval}
                                onSelect={deleteItems}
                            />;

                        })}

                </ol>

            </div>
        </div>


    </>




};


export default Todo;

