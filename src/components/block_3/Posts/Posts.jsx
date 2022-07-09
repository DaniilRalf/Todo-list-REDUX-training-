import PostItem from "./PostsItem/PostItem";
import {useDispatch} from "react-redux";
import {getPosts} from "../../../features/Block_3_Slice";

const Posts = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button
                type='submit'
                onClick={() => dispatch(getPosts())}
            >Get posts</button>
            <PostItem></PostItem>
        </div>
    );
};

export default Posts;