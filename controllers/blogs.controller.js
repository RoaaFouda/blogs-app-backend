import { createBlog, deleteBlogData, getBlogs, updateBlogData } from "../services/blogs.service.js"
import BaseError from "../utils/errorHandlers/BaseError.js";

export const getAllBlogs = async (req, res) => {
    try{
        const blogs = await getBlogs();
        res.status(200).json({
            status: "success",
            data: blogs
        })
    } catch(err) {
        throw new BaseError()
    }
}

export const createNewBlog = async (req, res) => {
    try{
        const blog = await createBlog({...req.body, userId: req.user});
        res.status(201).json({
            status: "success",
            data: blog
        })
    } catch (err) {
        throw err;
    }
}


export const updateBlog = async (req, res) => {
    const {id} = req.params;
    try{
        const blog = await updateBlogData(id, req.body);
        res.status(201).json({
            status:"success",
            data: blog})
    } catch(err) {
        throw err;
    }
}

export const deleteBlog = async (req, res) => {
    const {id} = req.params;
    try{
        const blog = await deleteBlogData(id);
        res.status(201).json({
            status:"success",
            data: {message: "Blog deleted successfully!"}
        })
    } catch (err) {
        throw err;
    }
}