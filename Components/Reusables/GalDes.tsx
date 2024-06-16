"use client"

import React from 'react'

const GalDes = ({data}:{data:any}) => {
  return (
    <div
      className="overflow-y-scroll bg-black bg-opacity-50 text-white text-[18px] galleryDes"
      style={{
        width: "100%",
        height: "50%",
        position: "absolute",
        padding: "1.5rem",
        overflowY: "scroll",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <style jsx>{`
        .overflow-y-scroll::-webkit-scrollbar {
          display: none;  // For Chrome, Safari, and Opera
        }
      `}</style>
      {data?.description}
    </div>
  )
}

export default GalDes
