import Footer from "../components/Footer"
import Header from "../components/Header"
import aboutBg from "../assets/images/about_bg.png"
import Banner from "../components/Banner"
import Collapse from "../components/Collapse"
function About() {

  return (
    <>
      <Banner isAbout={true} />
      <div id="about-collapse">
        <Collapse title={"Fiabilité"} />
        <Collapse title={"Respect"} />
        <Collapse title={"Service"} />
        <Collapse title={"Sécurité"} />
      </div>
    </>
  )
}

export default About