import { useContext } from 'react/cjs/react.development';
import { todos } from '../context/myContext';
import './progressBar.css'
function ProgressBar(props){
    let todo = useContext(todos);
    let total = props.totalTask;
    let percent = Math.floor((todo.length/total)*100);
    console.log(percent);
    return <div>
                <div className="progress">
                    <div style={{height:"100%",width: (100-percent)+"%", backgroundColor:"Highlight"}}></div>
                </div>
                <p>{total-todo.length} of {total} tasks done</p>
           </div>
          
}
export default ProgressBar;