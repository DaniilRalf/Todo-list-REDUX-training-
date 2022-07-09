import style from './TodoItem.module.css';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {changeComplete, removeTodo} from "../../../features/Block_2_Slice";

const TodoItem = () => {
    let dispatch = useDispatch();
    let todo = useSelector(state => state.block_2.todo)
    let construct = todo.map(i => {
        return(
            <div key={i.id}>
                <div className="" onClick={() => dispatch(changeComplete(i.id))}>Completed</div>
                <div className={i.complete ? style.test : ''}>{i.text}</div>
                <div className="" onClick={() => dispatch(removeTodo(i.id))}>Delete</div>
            </div>
        )
    })

    return (
        <div>
            {construct}
        </div>
    );
};

export default TodoItem;