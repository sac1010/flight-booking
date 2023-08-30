"use client"
import ConfirmCard from '@/components/ConfirmCard';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'

const page = () => {
  const searchParams = useSearchParams();
  const data = JSON.parse(searchParams.get("details"));
  useEffect(()=>{
    console.log(data, "data")
  },[])
  return (
    <div className='lg:w-[60%] md:w-[80%] w-[90%] mx-auto my-10'>
      <ConfirmCard data={data}/>
    </div>
  )
}

export default page