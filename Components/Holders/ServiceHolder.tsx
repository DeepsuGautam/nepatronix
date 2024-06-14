import React from "react";
import ServiceCard from "../Reusables/ServiceCard";
import LinkData from "../Reusables/LinkData";
import ThemeButton from "../Reusables/ThemeButton";

const ServiceHolder = ({
  data,
  isPage,
  isInfiniteScroll,
}: {
  data: any[];
  isPage: boolean;
  isInfiniteScroll: boolean;
}) => {

  return (
    <section className="w-full py-[15px] text-[20px] px-[20px] bg-[#daeeff] text-center">
      {!isInfiniteScroll && (
        <>
        <br/>
        <br/>
          <h1 className="font-bold text-8xl text-[#173149]">
            Services We Provide
          </h1>
          <br />
          <br />
        </>
      )}
      <div className="w-full flex justify-center gap-[30px] flex-wrap">
        {Array.isArray(data) && data?.map((item, idx) => (
          <LinkData link={`/services/${item._id}`} key={idx}>
            <ServiceCard key={idx} data={item} />
          </LinkData>
        ))}
      </div>
      {!isPage && (
        <>
          <br />
          <br />
          <ThemeButton style={{}} text="See All Services" link="/services" />
          <br />
          <br />
        </>
      )}
      {
        isInfiniteScroll && <><br/><br/></>
      }
    </section>
  );
};

export default ServiceHolder;
