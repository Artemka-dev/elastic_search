import React from "react";

import Card from "react-bootstrap/Card";
import Context from "../context";

function Post({ post, pos }) {
    const {value} = React.useContext(Context);
    
    return (
        <Card className="mb-4">
            <Card.Body>
                {value ?
                    <Card.Title>
                        {post.title.substring(0, pos)}<mark>
                            {post.title.substring(pos, pos + value.length)}
                        </mark>{post.title.substring(pos + value.length, pos + post.title.length)}
                    </Card.Title>  
                : <Card.Title>{post.title}</Card.Title>}
                <Card.Text>
                    {post.body}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Post;