
import './Body.css'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright &#169; {currentYear} Jan Manuel Bagares. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer;