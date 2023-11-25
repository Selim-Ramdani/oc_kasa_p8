import { useState } from "react";
import dropdownOpen from "../../assets/images/dropdown_open.svg";
import dropdownClose from "../../assets/images/dropdown_close.svg";

function Collapse({ title, content }) {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div id="collapse-wrapper">
      <div id="collapse-wrapper__title">
        <img
          src={toggle ? dropdownClose : dropdownOpen}
          id={toggle ? "dropdown_close" : "dropdown_open"}
          onClick={handleClick}
        />
        <h3>{title}</h3>
      </div>
      <div
        id={
          toggle
            ? "collapse-wrapper__content"
            : "collapse-wrapper-content__hidden"
        }
      >
        {Array.isArray(content) ? (
          content.map((item, index) => {
            return <p key={index}>{item}</p>;
          })
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

export default Collapse;
