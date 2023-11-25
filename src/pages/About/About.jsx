import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import { aboutData } from "../../data/aboutData";
function About() {
  return (
    <>
      <Banner isAbout={true} />
      <div id="about-collapse">
        {aboutData.map((data, index) => (
          <Collapse
            key={`${data.title}-${index}`}
            title={data.title}
            content={data.description}
          />
        ))}
      </div>
    </>
  );
}

export default About;
