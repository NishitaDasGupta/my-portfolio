import About from "./component/About/About"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer/Footer"
import Home from "./component/Home/Home"
import Navbar from "./component/Navbar/Navbar"
import Projects from "./component/Projects/Projects"
import Skills from "./component/Skills/Skills"


function App() {
 
  return (
   <div>
     <Navbar></Navbar>
     <Home></Home>
     <About></About>
     <Skills></Skills>
     <Projects></Projects>
     <Contact></Contact>
     <Footer></Footer>
    </div>
  )
}

export default App
