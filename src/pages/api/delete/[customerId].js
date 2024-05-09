import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "Feaild", message: "Error in connection in DB!" });
  }

  if (req.method === "DELETE") {
    const id = req.query.customerId;
    try {
      await Customer.deleteOne({ _id: id });
      return res.status(200).json({
        status: "Success",
        message: "Customer Deleted!",
      });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ status: "Feild", message: "Internal Server Error" });
    }
  }
}
