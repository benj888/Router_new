import { useRouter } from "next/router"



export default function Home() {

const route = useRouter()

const {id} = route.query
  return (
    <div > {id} </div>

  )
}