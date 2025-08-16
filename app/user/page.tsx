import React from 'react'
import Userpage from './userpage'

interface Props{
  searchParams:{sortOrder:string}
}

const page = ({searchParams:{sortOrder}}:Props) => {
  return (
    <div>
      <Userpage sortOrder={sortOrder} />
    </div>
  )
}

export default page
