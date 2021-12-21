import { useContext } from "react";
import { text } from '../context/myContext'
function AddingBar(props){
    const inputStr = useContext(text);
    return(
        <div>
            <input type='text' value={inputStr} onChange={props.textChange}/>
            <button onClick={props.addTodo}>ADD</button>
        </div>
    )
}
export default AddingBar;