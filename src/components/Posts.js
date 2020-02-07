import React from "react";

import Post from "./Post";
import Context from "../context";

function Posts({ posts }) {
    const {value} = React.useContext(Context);

    return (
        <div>
            {posts.map(post => {
                if (post.title.includes(value)) {
                    return <Post key={post.id} post={post} pos={post.title.search(value)} />
                }
            })}
        </div>

    );
}

export default Posts;