import logoFooter from "../assets/images/logo_kasa_footer.png";

function Footer() {
  return (
    <footer>
      <div id="footer-logo">
        <img src={logoFooter} alt="logo kasa footer" />
      </div>
      <div id="footer-copyright">
        <h3>© 2023 Kasa. All rights reserved</h3>
      </div>
    </footer>
  )
}

export default Footer
