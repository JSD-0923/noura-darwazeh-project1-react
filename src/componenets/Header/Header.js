import Triangles from "../Triangles/Triangles.js";
import WelcomeHeader from "../WelcomeHeader/WelcomeHeader.js";
import Nav from './Partils/Nav.js';
import styles from './Header.module.css'
function Header() {
  return (
    <div className="header">
      <section>
        <Nav />
      </section>
      <section>
        <Triangles />
      </section>
      <section>
        <WelcomeHeader />
      </section>
    </div>
  );
}
export default Header;