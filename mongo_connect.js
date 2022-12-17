const mongoose = require("mongoose");
const DB_HOST =
  "mongodb+srv://envy732:fx3kb3wxw@cluster0.siabj9q.mongodb.net/contacts_reader?retryWrites=true&w=majority";
mongoose
  .connect(DB_HOST)
  .then(() => console.log("data base connect"))
  .catch(() => console.log("no connect"));
