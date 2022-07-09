import {useSelector} from "react-redux";

const FirstName = () => {
    let name = useSelector(state => state.block_1.firstName)

    return (
        <div>First Name - {name}</div>
    );
};

export default FirstName;