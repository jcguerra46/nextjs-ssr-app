const Header = () => {
    return (
        <header className="header">
            <div className="lay">
                <div className="row">
                    <div className="col-4 header__left">
                        <div className="com-hamburger">
                            <span className="com-hamburger__bar"></span>
                            <span className="com-hamburger__bar"></span>
                            <span className="com-hamburger__bar"></span> 
                        </div>
                        {/* <form className="com-search ">
                            <input type="text" className="com-search__input" placeholder="Buscar">
                            <i className="icon-search"></i>
                            <input type="submit" value="Buscar" className="--btn --primary com-search__submit">
                        </form> */}
                    </div>
                    <div className="col-4  header__middle">
                        <a href="/" className="header__middle__logo">
                            <i className="logo-la-nacion"></i>
                        </a>
                    </div>
                    <div className="col-4 header__right">
                        
                        <div className="com-usuario">
                            <button className="--btn --highlight hlp-marginRight-35">Suscribite</button>
                            <button className="--btn --secondary">Ingresar</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;