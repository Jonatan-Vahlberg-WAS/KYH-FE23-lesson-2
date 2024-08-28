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