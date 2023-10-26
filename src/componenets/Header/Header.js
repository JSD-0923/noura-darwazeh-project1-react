import Triangles from './Partils/Triangles';
import WelcomeBar from './Partils/WelcomeBar';
import Nav from './Partils/Nav.js';
import styles from './Header.module.css';

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
        <WelcomeBar />
      </section>
    </div>
  );
}
export default Header;