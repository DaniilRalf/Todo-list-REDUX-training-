import {v4} from 'uuid';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../../../features/Block_2_Slice";

const Form = () => {
    let [stateInput, setStateInput] = useState( '');
    let dispatch = useDispatch();
    let addTodoItem = () => {
        let item = {
            id: v4(),
            text: stateInput,
            complete: false,
        }
        dispatch(addTodo(item));
        setStateInput('');
    }

    return (
        <form onClick={e => e.preventDefault()}>
            <input
                type='text'
                placeholder='type something'
                value={stateInput}
                onChange={e => setStateInput(e.target.value)}
            />
            <button
                type='submit'
                onClick={() => addTodoItem()}
            >Submit</button>
        </form>
    );
};

export default Form;