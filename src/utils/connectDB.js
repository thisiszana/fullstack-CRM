const { default: mongoose } = require("mongoose");

async function connectDB() {
  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connect to DB");
}

export default connectDB;
