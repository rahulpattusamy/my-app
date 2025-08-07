
interface Props{
   params:  {slug:string[]}
}

const page = ({params:{slug}}:Props) => {
  return (
    <div>Productpage {slug}</div>
  )
}

export default page