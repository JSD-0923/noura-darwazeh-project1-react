import Buttons from "../../Buttons/Buttons";
import { useState } from "react";
function Nav(props) {
    
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