import { Experience } from "@/components/experience"
import { NavBar } from "@/components/navbar"
import { About } from "@/components/about"

const Home = () => {
  return( 
    <>
      <NavBar/>
      <About/>
      <Experience/>
    </>
  )
}

export default Home