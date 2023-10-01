import homepageBg from "../assets/images/homepage_bg.png";
import aboutBg from "../assets/images/about_bg.png";

function Banner({ isAbout = false }) {
  return (
    <div id="banner-container">
      <img src={isAbout ? aboutBg : homepageBg} alt="homepage_background" id="banner-container__img" />
      {
        isAbout ? null :
        <h1 id="banner-container__title">Chez vous, partout et ailleurs</h1>
      }
    </div >
  )
}

export default Banner;