import User from "../models/User";

export const singup = async (req, res) => {
  const { username, email, password, roles } = req.body;

  console.log(req.body);
  res.json("singup");
};

export const singin = async (req, res) => {
  res.json("singin");
};
