const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/idaybook";

const connecttoMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connect to mongo");
  });
};
module.exports = connecttoMongo;
