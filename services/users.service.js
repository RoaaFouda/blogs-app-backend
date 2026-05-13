import User from "../models/User.js"
import NotFoundError from "../utils/errorHandlers/NotFoundError.js";

export const getCurrentUser = async (id) => {
    const user = await User.findOne({_id: id});
    if(!user)
        throw new NotFoundError();
    return user;
}