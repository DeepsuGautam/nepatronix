import Image from 'next/image'
import React from 'react'
import ThemeButton2 from './ThemeButton2'

const BlogCard = ({data}:{data:any}) => {
  return (
    <div className='w-full max-w-[350px] min-h-[550px] relative'>
        <div className='absolute p-[25px] w-full h-full transition-all duration-500 bg-white cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 rounded-2xl'>
        <Image
          src={`/api/files${data?.image}`}
          alt=""
          width={400}
          height={400}
          className="h-[150px] object-cover"
        />
        <br />
        <h1 className="font-bold text-[22px]">{data?.title}</h1>
        <p className="pt-5 text-[18px]" style={{height:"130px", overflow:"hidden"}}>{data.description}</p>
        <ThemeButton2
          link={`/blogs/${data?._id}`}
          text="Read Blog"
          style={{
            position: "absolute",
            left: "15px",
            right: "15px",
            bottom: "15px",
          }}
        />
        <div style={{width:"0", height:"0", display:"none"}} dangerouslySetInnerHTML={{__html:data?.content}}></div>
        </div>      
    </div>
  )
}

export default BlogCard
