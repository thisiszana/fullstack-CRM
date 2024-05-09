import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "Failed", message: "Error in connection DB!" });
  }

  if (req.method === "POST") {
    const data = req.body.data;
    console.log(data);

    if (!data.name || !data.lastName || !data.email) {
      return res
        .status(400)
        .json({ status: "Bad Request", message: "Invalid Data" });
    }

    try {
      const customer = await Customer.create(data);
      
      res.status(201).json({
        status: "Success",
        message: "Customer created successfully",
        data: customer,
      });

    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ status: "feild", message: "error in storing in DB!" });
    }
  }
}
