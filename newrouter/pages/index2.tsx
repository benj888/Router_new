import { useRouter } from "next/router"


export default function Home() {

    
    const backRouter=useRouter()
    return (
      <div onClick={(e)=>{
        
        backRouter.back()
      }}>123</div>
  
    )
  }
  