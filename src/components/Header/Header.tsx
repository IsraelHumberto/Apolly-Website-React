import { Wrapper } from "../../styles/Wrapper"
import CardDownloadApp from "../CardDownloadApp/CardDownloadApp"
import NavBar from "../NavBar/NavBar"
import * as C from './style'



const Header = () => {
    return (
        <C.Container>
            <Wrapper>
                <NavBar />
                <div className="hero">
                <CardDownloadApp />
                <img src="images/ViewMobileAppMockup1.png" alt="" className="phoneHero"/>
                </div>
            </Wrapper>
        </C.Container>
    )
}

export default Header