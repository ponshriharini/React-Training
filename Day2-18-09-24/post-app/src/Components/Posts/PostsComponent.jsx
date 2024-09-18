import React, { useEffect, useState } from "react";
import Data from "../../Data/Posts.json";
import "./PostsStyles.css";
import ActionsComponent from "../Actions/ActionsComponent";

function PostsComponent() {

    return(
        <div className="post-main-container">
        <div className="post-detail-container">
            {Data.posts.map((post) => (
                <div className="card" key={post.id}>
                    <div className="card-title">
                        <h4>{post.title}</h4>
                    </div>
                    <div className="card-body">
                        <p>{post.body}</p>
                    </div>
                    <div className="tags mb-2 d-flex">
                        <div className="tag-header">Tags:</div> 
                        {post.tags.map((tag, index) => (
                            <div className="tag" key={index}>
                                {tag}
                            </div>
                        ))}
                    </div>
                    <div className="interactions d-flex pb-2">
                        <div className="views">
                            Views: {post.views}
                        </div>
                        <div className="reactions d-flex">
                            <div className="likes">👍{post.reactions.likes}</div>
                            <div className="dislikes">👎{post.reactions.dislikes}</div>
                        </div>
                    </div>
                    {post.userId == 123 ? <ActionsComponent /> : <></>}
                </div>
            ))}
        </div>
        <div className="total-post-count mb-3 pb-3">
            <div>Total Posts: {Data.total}</div>
        </div>
        </div>
    )
}

export default PostsComponent;