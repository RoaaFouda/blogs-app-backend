import { getCurrentUser } from "../services/users.service.js";

export const getUser = async (req, res) => {
  try {
    console.log(req.user)
    const user = await getCurrentUser(req.user);
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    throw err;
  }
};
