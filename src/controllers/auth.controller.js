import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";
import Role from "../models/Role";

export const singup = async (req, res) => {
  const { username, email, password, roles } = req.body;

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  });
  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "user" });
    newUser.roles = [role._id];
  }

  const savedUser = await newUser.save();

  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 86400, //24 hours
  });
  res.status(200).json({ token });
};

export const singin = async (req, res) => {
  const { email, password } = req.body;
  //populate Devuelve a el objeto con todos los datos del identificador roles
  const userfound = await User.findOne({ email }).populate("roles");

  if (!userfound) {
    return res.status(400).json({ message: "User not found" });
  }
  const matchPassword = await User.comparePassword(
    password,
    userfound.password
  );

  if (!matchPassword)
    return res.status(401).json({ token: null, message: "Invalid password" });
  console.log(userfound);
  res.json({ token: "" });
};
