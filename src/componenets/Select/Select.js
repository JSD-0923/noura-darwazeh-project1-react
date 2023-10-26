import styles from './Select.module.css'
function Select(props) {
    return (
        <div class={styles.filterlabelSelect}>
            <label className={styles.selectLabel}  htmlFor="select"> {props.text}</label>
            <select className={styles.selectOp} id="select" >
                <option value="val1">{props.op1}</option>
                <option value="val2">{props.op2}</option>
                <option value="val3">{props.op3}</option>
            </select>
        </div>
    )
}
export default Select;
