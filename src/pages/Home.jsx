import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";

function Home() {
  return (
    <>
      <Banner isAbout={false} />
      <Gallery />
    </>
  );
}

export default Home;
