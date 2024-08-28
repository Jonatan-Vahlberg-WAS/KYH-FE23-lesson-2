type PostData = {
  userId: number;
  title: string;
  body: string;
};

type Post = PostData & {
  id: number;
};

type PostCommentData = {
  postId: number;
  name: string;
  email: string;
  body: string;
};

type PostComment = PostCommentData & {
  id: number;
};

type AlbumData = {
  userId: 1;
  title: "quidem molestiae enim";
};

type Album = AlbumData & { id: number }
