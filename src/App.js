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
                        Primer Chef1to1 — компания по продаже премиальной
                        посуды, пренадлежностей и устроиств для кухни,
                        ресторанов, кофеен
                    </p>
                    <div className="social">
                        <button className="social__btn social__btn-tlg"></button>
                        <button className="social__btn social__btn-wsp"></button>
                        <button className="social__btn social__btn-ggl"></button>
                    </div>

                    <div className="catalogs">
                        <p className="catalog__title">Наши каталоги</p>
                        <div className="catalog__items">
                            <button className="catalog__btn">100%Chef</button>
                            <button className="catalog__btn">Artilugis</button>
                            <button className="catalog__btn">PORDAMSA</button>
                            <button className="catalog__btn">
                                Costa Verde
                            </button>
                            <button className="catalog__btn">
                                Vista Alegre
                            </button>
                            <button className="catalog__btn">IRABIA</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
