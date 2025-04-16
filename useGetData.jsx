"use client";
import { useState, useEffect, useRef } from "react";

const useGetDatas = (url, setData) => {
  const [index, setIndex] = useState(0);
  const [error, setError] = useState(false);
  const [fetching, setFetching] = useState(false);
  const refValue = useRef(null);

  useEffect(() => {
    const addData = (prev, newData) => {
      if (!Array.isArray(prev) || index === 0) {
        return newData;
      } else {
        return [...prev, ...newData];
      }
    };

    const fetchData = async () => {
      try {
        setFetching(true);
        const res = await fetch(`${url}/${index}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        if (!res.ok) {
          throw new Error("Error on fetch!");
        }
        const data = await res.json();
        if (!data?.data || data?.data?.length === 0) {
          throw new Error("No more Data");
        }
        const dataList = data?.data;
        setData((prev) => addData(prev, dataList));
        setIndex((prev) => prev + 1);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setFetching(false);
      }
    };

    const fetchable = !error && !fetching && refValue?.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          await fetchData();
        }
      });
    });

    if (fetchable) {
      observer?.observe(refValue?.current);

      return () => {
        if (refValue?.current) {
          observer?.unobserve(refValue?.current);
        }
      };
    }
  }, [refValue, index, url]);

  return refValue;
};

export { useGetDatas };
