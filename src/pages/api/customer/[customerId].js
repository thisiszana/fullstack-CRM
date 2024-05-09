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
  
  if (req.method === "GET") {
    const id = req.query.customerId;
    try {
      const customer = await Customer.findOne({ _id: id });
      return res.status(200).json({
        status: "Success",
        data: customer,
      });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ status: "Feild", message: "Internal Server Error" });
    }
  }
}
