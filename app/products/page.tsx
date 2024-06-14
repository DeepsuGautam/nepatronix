import { getLists } from '@/ApiRequest/GetData'
import ProductHolder from '@/components/Holders/ProductHolder'
import ProductLoader from '@/components/Loaders/ProductLoader'
import React from 'react'

const page = async() => {
    const productData = await getLists("products", 0)
  return (
    <main className='pt-[8rem]'>
        <ProductHolder
           data={productData}
           isInfiniteScroll={false}
           isPage={true}
           />
           <ProductLoader/>
    </main>
  )
}

export default page
