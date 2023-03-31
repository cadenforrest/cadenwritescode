import { Experience } from "@/components/experience"
import { NavBar } from "@/components/navbar"
import { About } from "@/components/about"
import { Feedback } from "@/components/feedback"
import  { Contact }  from "@/components/contact"
import  { Technology }  from "@/components/technology"
import  { Links }  from "@/components/links"

const Home = () => {
  return( 
    <>
      <NavBar/>
      <About/>
      {/* <Links/> */}
      <Experience/>
      <Technology/>
      <Feedback/>
      <Contact/>
    </>
  )
}

export default Home