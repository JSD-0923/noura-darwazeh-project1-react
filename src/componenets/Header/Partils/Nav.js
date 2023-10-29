import Buttons from "../../Button/Button";
import Panel from "../../Panel/Panel";
import { useState } from "react";
function Nav(props) {
    const [panelVisible , setPanelVisble] = useState(false);
    const desplayPanel =()=>{
        console.log("test is done");
        setPanelVisble(!panelVisible);
        console.log(panelVisible);
    }
    return (
        <nav>
            <p>Wep Topics</p>
            <div className="buttons">
                <Buttons  >Dark Mode</Buttons>
                <Buttons onClick={desplayPanel} >Favourites</Buttons>
                {panelVisible && <Panel />}
            </div>
        </nav>
    )
}
export default Nav;