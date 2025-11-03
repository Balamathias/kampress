"use client"


import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
    const router = useRouter();
    return router?.push('https://da22.host-ww.net:2222/evo/login');


  return (
    <div>page</div>
  )
}

export default page