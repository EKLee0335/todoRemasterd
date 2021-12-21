import AddingBar from "../addingBar/addingBar"
import MainList from "../mainList/mainList";
import { useState } from "react";
import {text,todos} from '../context/myContext'
function Body(){
    const [inputStr,setInput] = useState(''); // store input text
    const [id,setID] = useState(1); //id for item
    const [todo,settodo] = useState([]);//store all todo object
    function textChange(event){
        setInput(event.target.value);
    }
    function addTodo(){
        let item = {'id':id, 'content': inputStr};
        settodo([...todo,item]);
        setID(id+1)
        setInput('');
    }
    function removeItem(id){
        let data = todo.filter((item)=>{return item.id!==id});
        settodo(data);
    }
    function editItem(id,content){
        let data = todo;
        data.forEach(function(item, index, array) {
            if(item.id === id){
                item.content = content;
            }
          })
        settodo(data);
    };
    return(
        <todos.Provider value={todo}>
            <text.Provider value={inputStr}>
                <div>
                    <AddingBar textChange={textChange} addTodo={addTodo}></AddingBar>
                    <MainList removeItem={removeItem} editItem={editItem}></MainList>
                </div>
            </text.Provider>
        </todos.Provider>
    )
}
export default Body