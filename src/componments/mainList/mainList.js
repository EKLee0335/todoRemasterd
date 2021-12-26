import { useContext, useState } from "react/cjs/react.development";
import { todos } from "../context/myContext";
import './mainList.css'
function MainList(props){
    const todo = useContext(todos);
    const [edit,setEdit] = useState(false);
    const [editId,setId] = useState();
    const [text,setText] = useState('');
    function handelChange(event){
        setText(event.target.value);
    }
    function show(){
        let data = todo;
        return data.map((item)=>{
                 if(edit){
                     if(item.id === editId){
                          return <div className="list" key={item.id}> 
                                    <input type='text' value={text} onChange={handelChange}/>
                                    <button onClick={()=>checkedit(item.id)}>done</button>
                                </div> 
                     }
                     else{
                        return <div className="list" key={item.id}> 
                                    <p>{item.content}</p>
                                    <button onClick={()=>checkedit(item.id)}>edit</button>
                                    <button onClick={()=>props.removeItem(item.id)}>remove</button>
                               </div>
                     }
                   
                 }
                 else{
                    return <div className="list" key={item.id}> 
                                <p>{item.content}</p>
                                <button onClick={()=>checkedit(item.id)}>edit</button>
                                <button onClick={()=>props.removeItem(item.id)}>remove</button>
                            </div>
                 }
                 
        })
    }
    function checkedit(id){
        setEdit(!edit);
        setId(id);
        setText('');
        props.editItem(id,text);
    }
   
    return  <div className="todos">
                {show()}
            </div>;
}
export default MainList;