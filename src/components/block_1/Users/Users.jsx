import FirstName from "./FirstName/FirstName";
import LastName from "./LastName/LastName";
import {useDispatch} from "react-redux";
import {setFirstName, setLastName} from "../../../features/Block_1_Slice";

const Users = () => {
    let dispatch = useDispatch();

    return (
        <div>
            <input type="text" onChange={e => dispatch(setFirstName(e.target.value))}/>
            <input type="text" onChange={e => dispatch(setLastName(e.target.value))}/>

            <FirstName></FirstName>
            <LastName></LastName>
        </div>
    );
};

export default Users;