import { Wrapper } from "../../styles/Wrapper"
import * as C from './style'

import { FaBars } from "react-icons/fa";
import Logo from "../Logo/Logo";
import DownloadButton from "../Buttons/Download/Download";


const NavBar = () => {
    return (
            <C.Container>
                <FaBars fontSize={24}/>
                <div className="logo">
                    <Logo />    
                </div>
                <DownloadButton />
            </C.Container>
    )
}

export default NavBar