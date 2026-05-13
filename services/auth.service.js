import User from "../models/User.js";
import InvalidCredentialError from "../utils/errorHandlers/InvalidCredentialError.js";
import NotFoundError from "../utils/errorHandlers/NotFoundError.js";
import ResourceAlreadyExistError from "../utils/errorHandlers/ResourceAlreadyExistError.js";

function generateSlug(username) {
  // If username already has _, split there
  if (username.includes("_")) {
    return username.replace("_", "-");
  }
  if (username.includes("-")) {
    return username; // Already has dash
  }

  // Otherwise, split in middle
  const mid = Math.ceil(username.length / 2);
  return username.substring(0, mid) + "-" + username.substring(mid);
}

export const createUser = async ({ username, email, password }) => {
  const hashedPassword = await User.hashPassword(password);
  const slug = generateSlug(username);
  try {
    const user = await User.create({
      username,
      password: hashedPassword,
      email,
      slug,
    });

    return user;
  } catch (err) {
    if (err.code === 11000)
      throw new ResourceAlreadyExistError(
        Object.keys(err.keyPattern)[0],
        err.keyValue.username,
      );

      throw err;
  }

};

export const loginService = async({username, password}) => {
  const user = await User.findOne({username});

  if(!user){
    throw new InvalidCredentialError();
  }
  const isValid = await user.comparePasswords(password);

  if(!isValid){
    throw new InvalidCredentialError();
  }

  return user;
}