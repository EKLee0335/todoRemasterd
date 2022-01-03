import { useContext } from 'react/cjs/react.development';
import { todos } from '../context/myContext';
import './progressBar.css'
function ProgressBar(props){
    let todo = useContext(todos);
    let percent = Math.floor((props.checkCnt/todo.length)*100);
    if(todo.length===0) percent=0;
    return <div>
                <div className="progress">
                    <div style={{height:"100%",width: percent+"%", backgroundColor:"Highlight"}}></div>
                </div>
                <p>{props.checkCnt} of {todo.length} tasks done</p>
           </div>
          
}
export default ProgressBar;