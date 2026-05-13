import Blog from "../models/Blog.js";
import NotFoundError from "../utils/errorHandlers/NotFoundError.js";

export const getBlogs = async () => {
  const blogs = await Blog.find({}).populate("user", "username");
  return blogs;
};

export const createBlog = async ({
  title,
  description,
  content,
  coverImage,
  userId,
}) => {
  const blog = await Blog.create({
    title,
    description,
    content,
    coverImage,
    user: userId,
  });
  await blog.populate("user", "username");
  return blog;
};

export const updateBlogData = async (
  id,
  { title, description, content, coverImage },
) => {
  const updatedData = {};

  if (title) updatedData.title = title;
  if (description) updatedData.description = description;
  if (content) updatedData.content = content;
  if (coverImage) updatedData.coverImage = coverImage;

  let blog = await Blog.findByIdAndUpdate(id, updatedData, {
    returnDocument: 'after',
    runValidators: true,
  }).populate('user', 'username');

  return blog;
};

export const deleteBlogData = async (id) => {
    const blog = await Blog.findByIdAndDelete(id);
    if(!blog){
        throw new NotFoundError()
    }
    return true;
}
