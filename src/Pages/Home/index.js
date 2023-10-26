// import Search from "../../componenets/Main/Search/Search";
// import Cards from "../../componenets/Main/Cards/Cards";
import SearchBar from "./Partils/SearchBar";
import Cards from "./Partils/Cards";
import styles from './index.module.css'
const Home = () => {
  return (
    <main>

      <section className={styles.sectionSearch}>
        <SearchBar />
      </section>

      <section class={styles.sectionHeader}>
        <h1>"24" Web Topics Found </h1>
      </section>

      <section className={styles.sectionCards}>
        <Cards />
      </section>

    </main>

  );
}
export default Home;