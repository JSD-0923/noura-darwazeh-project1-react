import Search from "../../componenets/Main/Search/Search";
import Cards from "../../componenets/Main/Cards/Cards";
import styles from './index.module.css'
const Home = () => {
  return (
    <main>

      <section className={styles.sectionSearch}>
        <Search />
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