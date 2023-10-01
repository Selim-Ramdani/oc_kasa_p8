import dropdownOpen from "../assets/images/dropdown_open.svg";
import dropdownClose from "../assets/images/dropdown_close.svg";
import { useState } from "react";

function Collapse({ title }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event) => {
    setIsOpen(!isOpen);
  }
  return (
    <div id="collapse-container">
      {
        isOpen ?
          <>
            <img src={dropdownClose} alt="" id="dropdown_close" onClick={() => setIsOpen(!isOpen)} />
          </>
          : <img src={dropdownOpen} alt="" id="dropdown_open" onClick={() => setIsOpen(!isOpen)} />
      }
      <h3 id="collapse-container__title">{title}</h3>
    </div>
  )

}

export default Collapse