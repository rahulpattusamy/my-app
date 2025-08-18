import React, { Suspense } from 'react'
import Userpage from './userpage'

interface Props{
  searchParams:{sortOrder:string}
}

const page = ({searchParams:{sortOrder}}:Props) => {
  return (
    <div>
      <Suspense fallback={<p>Loading....</p>}>
      <Userpage sortOrder={sortOrder} />
      </Suspense>
    </div>
  )
}

export default page
