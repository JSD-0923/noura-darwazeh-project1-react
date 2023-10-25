import Buttons from "../../Buttons/Buttons";
function Nav(props) {
    return (
        <nav>
            <p>Wep Topics</p>
            <div className="buttons">
                <Buttons >Dark Node</Buttons>
                <Buttons >Favourites</Buttons>
            </div>
        </nav>
    )
}
export default Nav;