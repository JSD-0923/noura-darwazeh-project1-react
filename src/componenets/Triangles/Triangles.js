import styles from './Triangles.module.css';
function Triangles(props) {
    return (
        <div className={styles.triangleContainer}>
            <div className={styles.triangleBlue}></div>
            <div className={styles.triangleGreen}></div>
        </div>
    )
}
export default Triangles;