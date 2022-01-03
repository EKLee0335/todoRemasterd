import AddingBar from "../addingBar/addingBar"
import MainList from "../mainList/mainList";
import ProgressBar from "../progressBar/progressBar";
import { useEffect, useState } from "react";
import {text,todos} from '../context/myContext'
import './body.css'
function Body(){
    const [inputStr,setInput] = useState(''); // store input text
    const [id,setID] = useState(1); //id for item
    const [todo,settodo] = useState([]);//store all todo object
    const [checkCnt,setCheck] = useState(0)
    function textChange(event){
        setInput(event.target.value);
    }
    function addTodo(){
        if(inputStr===''){
            window.alert("input can't be none");
        }
        else{
          let item = {'id':id, 'content': inputStr,'checked':false};
          settodo([...todo,item]);
          setID(id+1);
          setInput('');  
        }
        
    }
    function removeItem(id){
        let data = todo.filter((item)=>{return item.id!==id});
        let checked = data.filter((item)=>{return item.checked === true});
        setCheck(checked.length);
        settodo(data);
    }
    function editItem(id,content){
        if(content!==''){
            let data = todo;
            data.forEach(function(item, index, array) {
            if(item.id === id){
                item.content = content;
            }
          })
        settodo(data); 
        }
        
    };
    function handleCheck(id){
        let data = todo;
        data.forEach(function(item, index, array) {
            if(item.id === id){
                item.checked = !item.checked;
            }
        })
        settodo(data); 
        let checked = data.filter((item)=>{return item.checked === true});
        setCheck(checked.length)
    }
    return(
        <todos.Provider value={todo}>
            <text.Provider value={inputStr}>
                <div className="body">
                    <AddingBar textChange={textChange} addTodo={addTodo}></AddingBar>
                    <MainList removeItem={removeItem} editItem={editItem} handleCheck={handleCheck}></MainList>
                    <ProgressBar checkCnt={checkCnt}></ProgressBar>
                </div>  
            </text.Provider>
        </todos.Provider>
    )
}
export default Body