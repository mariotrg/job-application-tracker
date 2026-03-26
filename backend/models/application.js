const mongoose = require("mongoose");
const url = process.env.MONGODB_URI;

mongoose.set("strictQuery", false);
mongoose.connect(url, { family: 4 }).then(console.log("connected to mongodb"));

const applicationSchema = new mongoose.Schema({
  position: String,
  company: String,
  url: String,
  applicationDate: String,
  applicationStatus: String,
  notes: String,
  source: String,
});

applicationSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Application", applicationSchema);
