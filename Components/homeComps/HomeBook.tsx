import React from 'react'
import BookCard from '../Reusables/BookCard';
import ThemeButton from '../Reusables/ThemeButton';
import { getLists } from '@/ApiRequest/GetData';

const HomeBook = async() => {
    const data = await getLists("books", 0, 12)
    return (
      <section className="w-full py-[15px] text-[20px]  bg-gradient-to-r from-red-300 to-blue-300 text-center">
       
          <>
            <br />
            <br />
            <h1 className="font-bold text-8xl text-[#2c1b3d]">
              Read Books
            </h1>
            <br />
            <br />
          </>
  
        <div className="w-full px-[40px] flex justify-center gap-[30px] flex-wrap">
          {data?.map((item: any, index: number) => (
            <BookCard key={index} data={item} />
          ))}
        </div>
          <>
            <br />
            <br />
            <ThemeButton style={{}} text="See All Books" link="/books" />
            <br />
            <br />
          </>
      </section>
    );
}

export default HomeBook
