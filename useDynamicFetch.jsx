"use client";
import React, { useEffect, useState } from "react";

const useDynamicFetch = (url) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const response = await res.json();
        if (!res?.ok) {
          throw new Error(response?.message);
        }
        setData(response?.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, [url]);

  return data;
};

export default useDynamicFetch;
