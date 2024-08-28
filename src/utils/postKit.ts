import { deleteData, getDetailData, getListData, postData, putData } from "./apiKit";

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



async function postPost(data: PostData) {
    try {
        const newPost = await postData<Post>(`https://jsonplaceholder.typicode.com/posts/`, data)
        return newPost
    } catch (error) {
        console.log("ERROR: creating post")
    }
}

async function putPost(data: Post) {
    try {
        const updatedPost = await putData<Post>(`https://jsonplaceholder.typicode.com/posts/${data.id}`, data)
        return updatedPost
    } catch (error) {
        console.log("ERROR: updating post")
    }
}

async function deletePost(id: number) {
    try {
        const newPost = await deleteData(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return newPost
    } catch (error) {
        console.log("ERROR: deleting post")
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