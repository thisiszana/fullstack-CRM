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

  if (req.method === "PATCH") {
    const id = req.query.customerId;
    const data = req.body;

    try {
      const customer = await Customer.findOne({ _id: id });
      customer.name = data.name;
      customer.lastName = data.lastName;
      customer.email = data.email;
      customer.phone = data.phone;
      customer.address = data.address;
      customer.postalCode = data.postalCode;
      customer.date = data.date;
      customer.products = data.products;
      customer.uppdatedAt = Date.now();
      customer.save();
      return res.status(200).json({
        status: "Success",
        message: "Customer Edit!",
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
