import {useSelector} from "react-redux";

const PostItem = () => {
    const posts = useSelector(state => state.block_3.posts)
    let construct = posts.map(i => {
        return <div key={i.id}>{i.title}</div>
    })

    return (
        <div>
            {construct}
        </div>
    );
};

export default PostItem;