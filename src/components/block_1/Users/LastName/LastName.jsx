import {useSelector} from "react-redux";

const LastName = () => {
    let lastName = useSelector(state => state.block_1.lastName)

    return (
        <div>Last Name - {lastName}</div>
    );
};

export default LastName;