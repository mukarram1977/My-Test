
import './App.css'
import Carousel from './components/Carousel/Carousel'
import Footer from './components/Footer/Footer'
import Reviews from './components/Review/Review'
import Navbar from './components/Service/Navbar'
import Services from './components/Service/Services'

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        Our Car Repair Services
      </h1>
      <Services></Services>
      <Reviews></Reviews>
      <Footer></Footer>
    </>
  )
}

export default App
