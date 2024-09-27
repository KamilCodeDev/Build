import Navbar from "./Components/Navbar/Navbar"
import Header from "./Components/Header/Header"
import Section from "./Components/Section/Section"
import Service from "./Components/Service/Service"
import Seyyam from "./Components/Seyyam/Seyyam"
import Galery from "./Components/Galery/Galery"
import Collection from "./Components/Collection/Collection"
import Footer from "./Components/Footer/Footer"
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Section />
       <Service />
      <Seyyam/>
      <Galery/>
      <Collection/>
      <Footer/>  
    </div>
  )
}

export default App
