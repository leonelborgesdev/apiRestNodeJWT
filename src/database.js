import mongoose from "mongoose";

mongoose
  .connect("mngodb://localhost/companydb")
  .then((db) => console.log("Db is connceted"))
  .catch((error) => console.log(error));
