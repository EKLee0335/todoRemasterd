import { useContext } from "react";
import { text } from '../context/myContext';
import './addingBar.css'
function AddingBar(props){
    const inputStr = useContext(text);
    return(
        <div className="inputSection">
            <input type='text' value={inputStr} onChange={props.textChange}/>
            <button onClick={props.addTodo}>ADD</button>
        </div>
    )
}
export default AddingBar;