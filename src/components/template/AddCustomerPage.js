import { useState } from "react";
import Form from "../module/Form";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import LoaderButton from "../module/LoaderButton";
import Link from "next/link";

function AddCustomerPage() {
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    postalCode: "",
    date: "",
    products: [],
  });

  const router = useRouter();

  const saveHandler = async () => {
    setIsLoading(true);
    const res = await fetch("/api/customer", {
      method: "POST",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    if (data.status === "Success") {
      toast.success("Data Successfully Create!");
      setIsLoading(false);
      router.push("/");
    } else {
      toast.error(data.message);
    }
  };
  const cancelHandler = () => {
    setForm({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      postalCode: "",
      date: "",
      products: [],
    });
    router.push("/");
  };

  return (
    <div className="customer-page">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="customer-detail__title">
        <h4>Add New Customer</h4>
        <Link href="/">Back Home</Link>
      </div>
      <Form form={form} setForm={setForm} />
      <div className="customer-page__buttons">
        <button className="first" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="second" onClick={saveHandler}>
          {isLoading ? <LoaderButton /> : "Save"}
        </button>
      </div>
    </div>
  );
}

export default AddCustomerPage;
