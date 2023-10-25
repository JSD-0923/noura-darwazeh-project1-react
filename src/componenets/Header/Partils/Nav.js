import Buttons from "../../Buttons/Buttons";
function Nav(props) {
    const { toggleDarkMode } = props
    return (
        <nav>
            <p>Wep Topics</p>
            <div className="buttons">
                <Buttons >Dark Mode</Buttons>
                <Buttons >Favourites</Buttons>
            </div>
        </nav>
    )
}
export default Nav;