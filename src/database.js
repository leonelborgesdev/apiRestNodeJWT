import mongoose from "mongoose";

mongoose
  .connect("mngodb://localhost/companydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Db is connceted"))
  .catch((error) => console.log(error));
