import "./App.css";
import logo from "./img/ellipse.png";

function App() {
    return (
        <div className="App">
            <div className="container">
                {/* the button  */}
                <div className="lang">
                    <button className="lang__button">English</button>
                </div>
                {/* header */}
                <div className="header__main">
                    <img className="header__img" src={logo} alt="logo" />
                    <p className="header__title">
                        Chef1to1 — компания по продаже премиальной посуды,
                        пренадлежностей и устроиств для кухни, ресторанов,
                        кофеен
                    </p>
                    <div className="social">
                        <div className="social__btn">
                            <div className="social__btn-tlg"></div>
                            <div className="social__btn-wsp"></div>
                            <div className="social__btn-ggl"></div>
                        </div>
                    </div>

                    {/* <div className="menu">
                        <p className="menu__title">information about btns</p>
                        <div className="menu__items">
                            <button className="menu__btn">100%Chef</button>
                            <button className="menu__btn">Artilugis</button>
                            <button className="menu__btn">PORDAMSA</button>
                            <button className="menu__btn">Costa Verde</button>
                            <button className="menu__btn">Vista Alegre</button>
                            <button className="menu__btn">IRABIA</button>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}

export default App;
