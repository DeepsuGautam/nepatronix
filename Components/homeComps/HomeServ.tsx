import { getLists } from '@/ApiRequest/GetData'
import React from 'react'
import ThemeButton from '../Reusables/ThemeButton'
import LinkData from '../Reusables/LinkData'
import ServiceCard from '../Reusables/ServiceCard'

const HomeServ = async() => {
    const data = await getLists("services", 0 , 8)

    return (
      <section className="w-full py-[15px] text-[20px] px-[20px] bg-[#daeeff] text-center">
       
       <>
        <br/>
        <br/>
          <h1 className="font-bold text-8xl text-[#173149]">
            Services We Provide
          </h1>
          <br />
          <br />
        </>
        <div className="w-full flex justify-center gap-[30px] flex-wrap">
          {Array.isArray(data) && data?.map((item, idx) => (
            <LinkData link={`/services/${item._id}`} key={idx}>
              <ServiceCard key={idx} data={item} />
            </LinkData>
          ))}
        </div>
          <>
            <br />
            <br />
            <ThemeButton style={{}} text="See All Services" link="/services" />
            <br />
            <br />
          </>
      </section>
  )
}

export default HomeServ
