import H1 from "./H1";
import HeaderImage from "./HeaderImage";
import investmentImg from '../../assets/investment-calculator-logo.png'

function Header() {
    return (
    <div id="header">
            <HeaderImage img={investmentImg} />
            <H1 title="Investment Calculator" />
    </div>
    )
}

export default Header;