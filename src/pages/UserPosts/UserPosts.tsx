import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UserPosts.css";
import { Post } from "../../types/postsTypes";
import { APIs } from "../../api/api";
import UserPostsPageTitle from "./UserPostsPageTitle";

export default function UserPosts() {
  const params = useParams();

  const [posts, setPosts] = useState<Post[]>([]);

  async function getUserPosts(userId: number) {
    const response = await APIs.getUserPosts(userId);
    setPosts(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    if (params.userId) {
      getUserPosts(parseInt(params.userId));
    }
  }, [params.userId]);

  return (
    <div>
      {params.userId && params.userName && (
        <UserPostsPageTitle userId={params.userId} userName={params.userName} />
      )}
      <div className="postsList">
        {posts.map((post) => {
          return (
            <article className="post" key={post.id}>
              <div className="postTitle">{post.title}</div>
              <div className="postBody">{post.body}</div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
