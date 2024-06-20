"use client";
import { postData } from "@/ApiRequest/PostReqs";
import React, { useState } from "react";

const ShopForm = ({ itemData }: { itemData: any }) => {
  const [invalid, setInvalid] = useState<boolean>(false);
  const [placed, setPlaced] = useState<boolean>(false);
  const [notPlaced, setNotPlaces] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [orderDetail, setOrderDetail] = useState({
    itemId: itemData?._id,
    itemName: itemData?.title,
    fullname: "",
    email: "",
    phone: "",
    items: "1",
  });

  const placeOrder = async (e: any) => {
    e?.preventDefault();
    if (!orderDetail?.items || parseInt(orderDetail?.items) < 0) {
      return setInvalid(true);
    }
    const posted = await postData(orderDetail, "orders");
    if (!posted) return setNotPlaces(true);
    return setPlaced(true);
  };

  return (
    <div className="w-full pt-[20px]">
      <button
        type="button"
        className="w-full bg-red-400 text-white p-[15px] text-[20px] hover:bg-red-500 hover:shadow-xl transition-all duration-300"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? "Cancel Order" : "Order Item"}
      </button>
      {isOpen && (
        <>
          <br />
          <br />
          <form action="" onSubmit={placeOrder}>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full p-[15px] text-[20px]"
              style={{ border: "2px solid gray" }}
              value={orderDetail?.fullname}
              onChange={(e: any) => {
                setOrderDetail((prev: any) => ({
                  ...prev,
                  fullname: e?.target?.value,
                }));
              }}
              required
            />
            <br />
            <br />
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-[15px] text-[20px]"
              style={{ border: "2px solid gray" }}
              required
              value={orderDetail?.email}
              onChange={(e: any) => {
                setOrderDetail((prev: any) => ({
                  ...prev,
                  email: e?.target?.value,
                }));
              }}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Enter Phone"
              className="w-full p-[15px] text-[20px]"
              style={{ border: "2px solid gray" }}
              maxLength={13}
              minLength={13}
              value={orderDetail?.phone}
              onChange={(e: any) => {
                setOrderDetail((prev: any) => ({
                  ...prev,
                  phone: e?.target?.value,
                }));
              }}
              required
            />
            <br />
            <br />
            <input
              type="number"
              placeholder="Enter No Of Items"
              className="w-full p-[15px] text-[20px]"
              style={{ border: "2px solid gray" }}
              value={orderDetail?.items}
              onChange={(e: any) => {
                setOrderDetail((prev: any) => ({
                  ...prev,
                  items: e?.target?.value,
                }));
              }}
              required
            />
            <br />
            <br />
            <button
              type="submit"
              className="w-fit bg-red-400 text-white p-[15px] text-[20px] hover:bg-red-500 hover:shadow-xl transition-all duration-300"
            >
              Place Order
            </button>
            <br />
            <br />
            {invalid && !placed && !notPlaced && (
              <span className="pl-[10px] text-red-500">
                No of items cant be 0 or in negative!
              </span>
            )}
            {placed && !invalid && !notPlaced && (
              <span className="pl-[10px] text-green-500">
                Order Placed Successfully!
              </span>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default ShopForm;
