export interface Blog {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  readTime: string;
  text: string;
  published: boolean;
}

export interface IBlog {
  blog: Blog;
}

export interface IBlogs {
  blogs: Blog[];
}
