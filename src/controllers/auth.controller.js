import User from "../models/User";

export const singup = async (req, res) => {
  const { username, email, password, roles } = req.body;

  const newUser = new User({
    username,
    email,
    password: User.encryptPassword(password),
  });
  console.log(req.body);
  res.json("singup");
};

export const singin = async (req, res) => {
  res.json("singin");
};
