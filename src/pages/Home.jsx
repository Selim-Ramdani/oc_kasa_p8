import Banner from "../components/Banner";
import Gallery from "../components/Gallery";

function Home() {
  return (
    <>
      <Banner isAbout={false} />
      <Gallery />
    </>
  );
}

export default Home;
