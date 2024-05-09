import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import LoaderButton from "./LoaderButton";

function Card({ customer }) {
  console.log(customer);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const deleteHandler = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`/api/delete/${customer._id}`, {
        method: "DELETE",
      });
      const json = await res.json();
      toast.success(json.message);
      if (json.status === "Success") router.reload();
    } catch (error) {
      setIsLoading(false);
      toast.error(json.message);
    }
  };

  return (
    <div className="card">
      <Toaster position="top-center" reverseOrder={false} />
      {customer && (
        <div className="card__details">
          <p>
            {customer.name} {customer.lastName}
          </p>
          <p>{customer.email}</p>
        </div>
      )}
      <div className="card__buttons">
        <button onClick={deleteHandler}>
          {isLoading ? <LoaderButton /> : "Delete"}
        </button>
        <Link href={`/edit/${customer._id}`}>Edit</Link>
        <Link href={`/customer/${customer._id}`}>Details</Link>
      </div>
    </div>
  );
}

export default Card;
