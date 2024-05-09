import { useState } from "react";
import Form from "../module/Form";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import moment from "moment";

function CustomerEditPage({ data: { data }, id }) {
  const date = data.date ? moment(data.date).utc().format("YYYY-MM-DD") : "";

  const [form, setForm] = useState({
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone || "",
    address: data.address || "",
    postalCode: data.postalCode || "",
    products: data.products || [],
    date: date || "",
  });

  const router = useRouter();

  const editHandler = async () => {
    try {
      const res = await fetch(`/api/edit/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: form }),
      });
      const json = await res.json();
      toast.success(json.message);
      if (json.status === "Success") router.push("/");
    } catch (error) {
      toast.error(json.message);
    }
  };

  const cancelHandler = () => router.push("/");

  return (
    <div className="customer-page">
      <Toaster position="top-center" reverseOrder={false} />
      <h4>Edit Customer</h4>
      <Form form={form} setForm={setForm} />
      <div className="customer-page__buttons">
        <button className="first" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="second" onClick={editHandler}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default CustomerEditPage;
