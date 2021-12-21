import { useContext, useState } from "react/cjs/react.development";
import { todos } from "../context/myContext";

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
                          return <div key={item.id} style={{border:'1px solid red'}}> 
                                  <input type='text' value={text} onChange={handelChange}/>
                                 <button onClick={()=>checkedit(item.id)}>done</button>
                                </div> 
                     }
                     else{
                        return <div key={item.id} style={{border:'1px solid red'}}> 
                        <p>{item.content}</p>
                        <button onClick={()=>checkedit(item.id)}>edit</button>
                        <button onClick={()=>props.removeItem(item.id)}>remove</button>
                       </div>
                     }
                   
                 }
                 else{
                    return <div key={item.id} style={{border:'1px solid red'}}> 
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
   
    return  <div>
                <div>
                {show()}
                </div>
              </div>;
}
export default MainList;