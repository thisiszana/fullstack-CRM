import moment from "moment";
import Link from "next/link";
import React, { useState } from "react";
import LoaderButton from "../module/LoaderButton";

function CustomerDetailsPage({ data }) {
  const [isLoading, setIsLoading] = useState(false);

  const deleteHandler = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`/api/delete/${customer._id}`, {
        method: "DELETE",
      });
      const json = await res.json();
      toast.success(json.message);
      setIsLoading(false);
      if (json.status === "Success") router.reload();
    } catch (error) {
      toast.error(json.message);
    }
  };

  return (
    <div className="customer-detail">
      <div className="customer-detail__title">
        <h4>Customer Details</h4>
        <Link href="/">Back Home</Link>
      </div>
      <div className="customer-detail__main">
        <div className="customer-detail__item">
          <span>Name:</span>
          <p>{data.name}</p>
        </div>
        <div className="customer-detail__item">
          <span>Last Name:</span>
          <p>{data.lastName}</p>
        </div>
        <div className="customer-detail__item">
          <span>Email:</span>
          <p>{data.email}</p>
        </div>
        <div className="customer-detail__item">
          <span>Phone:</span>
          <p>{data.phone}</p>
        </div>
        <div className="customer-detail__item">
          <span>Address:</span>
          <p>{data.address}</p>
        </div>
        <div className="customer-detail__item">
          <span>Postal Code:</span>
          <p>{data.postalCode}</p>
        </div>
        <div className="customer-detail__item">
          <span>Date:</span>
          <p>{moment(data.date).utc().format("YYYY-MM-DD")}</p>
        </div>
      </div>
      <div className="customer-detail__products">
        <p>Name</p>
        <p>Price</p>
        <p>Qty</p>
        {data.products.map((product, index) => (
          <React.Fragment key={index}>
            <span>{product.name}</span>
            <span>{product.price}</span>
            <span>{product.qty}</span>
          </React.Fragment>
        ))}
      </div>
      <div className="customer-detail__buttons">
        <p>Delet or Edit?</p>
        <button onClick={deleteHandler}>Delete</button>
        <Link href={`/edit/${data._id}`}>
          {isLoading ? <LoaderButton /> : "Edit"}
        </Link>
      </div>
    </div>
  );
}

export default CustomerDetailsPage;
