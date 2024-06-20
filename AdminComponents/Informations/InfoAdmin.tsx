import { getLists } from "@/ApiRequest/GetData";
import React from "react";

const InfoAdmin = async ({ type }: { type: string }) => {
  const data = await getLists(type, 0, null);
  return (
    <div>
      {data?.length < 1 && "Nothing Yet!"}
      {Array.isArray(data) &&
        data?.map((item, idx) => (
          // <LinkAdminCards link={`/admin-pannel/${type}`} addiStyle={{}}>
            <div
              key={idx}
              className="w-full p-[20px] bg-white overflow-none rounded-3xl shadow-2xl cursor-pointer"
              style={{ margin: "20px 0" }}
            >
              <strong>Name : </strong>{" "}
              {item?.fullname || item?.fName + " " + item?.lName}
              <br />
              {type === "orders" ? (
                <div style={{  }}>
                <strong>Phone : </strong>{item?.phone}
                <br/>
                  <strong>Address : </strong>{item?.address}
                  <br/>
                  <strong>Item : </strong>
                  {item?.itemName}
                  <br/>
                </div>
              ) : (
                <div style={{ overflow: "hidden", height: "150px" }}>
                  <strong>msg : </strong> {item?.message}
                </div>
              )}
            </div>
          // </LinkAdminCards>
        ))}
      {/* {data?.length > 0 && (
        <ThemeButton
          link={`/admin-pannel/${type}`}
          style={{ width: "100%" }}
          text={`See All ${type}`}
        />
      )} */}
    </div>
  );
};

export default InfoAdmin;
