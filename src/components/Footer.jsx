import logoFooter from "../assets/logo_kasa_footer.png";

function Footer() {
  return (
    <footer>
      <div id="footer__logo">
        <img src={logoFooter} alt="logo kasa footer" />
      </div>
      <div id="footer__copyright">
        <h3>© 2023 Kasa. All rights reserved</h3>
      </div>
    </footer>
  )
}

export default Footer
