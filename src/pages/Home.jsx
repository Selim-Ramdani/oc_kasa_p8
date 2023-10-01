import Header from "../components/Header"
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer"


function Home() {
  return (
    <>
      <Banner isAbout={false} />
      <Gallery />
    </>
  )
}

export default Home