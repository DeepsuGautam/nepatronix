"use client";
import React, { useEffect, useState } from "react";

const useUser = () => {
  const [isValid, setIsValid] = useState(false);
  const [userDetail, setUserDetail] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ACCOUNT}/api/v1/user-detail`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        if (!res.ok) {
          throw new Error("Not Valid!");
        }
        const data = await res.json();
        setUserDetail(data?.userDetail);
        setIsValid(true);
      } catch (error) {
        console.log(error);
        setIsValid(false);
      }
    };
    fetchData();
  }, []);

  return {
    valid: isValid,
    user: userDetail,
  };
};

export default useUser;
