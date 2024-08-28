import { getDetailData, getListData } from "./apiKit";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type PostComment = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};

async function getPosts() {
    try {
      const posts = await getListData<Post>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return posts;
    } catch (error) {
      console.log("ERROR: fetching posts");
    }
  }

async function getPost(id: number) {
  try {
    const post = getDetailData<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return post
  } catch (error) {
    console.log("ERROR: fetching post");
  }
}

async function getComments() {
  try {
    const comments = await getListData<PostComment>(
      "https://jsonplaceholder.typicode.com/comments"
    );
    return comments;
  } catch (error) {
    console.log("ERROR: fetching comments", error);
  }
}

async function getComment(id: number) {
    try {
      const comment = getDetailData<Comment>(`https://jsonplaceholder.typicode.com/comments/${id}`)
      return comment
    } catch (error) {
      console.log("ERROR: fetching comment");
    }
  }
