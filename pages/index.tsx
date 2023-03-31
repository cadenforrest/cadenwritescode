import { Experience } from "@/components/experience"
import { NavBar } from "@/components/navbar"
import { About } from "@/components/about"
import { Feedback } from "@/components/feedback"
import  { Contact }  from "@/components/contact"

const Home = () => {
  return( 
    <>
      <NavBar/>
      <About/>
      <Experience/>
      <Feedback/>
      <Contact/>
    </>
  )
}

export default Home