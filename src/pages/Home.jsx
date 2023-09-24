import Footer from "../components/Footer"
import Header from "../components/Header"
import homepageBg from "../assets/images/homepage_bg.png";
function Home() {

  return (
    <>
      <Header />
      <div id="homepage__top">
        <img src={homepageBg}  alt="homepage_background" id="homepage__top_bg" />
        <h1 id="homepage__top_title">Chez vous, partout et ailleurs</h1>
      </div>
      <Footer />
    </>
  )
}

export default Home