import Head from 'next/head';

/** Components */
import Header from './header';
import Footer from './footer';

const Container = (props) => {
    return (
        <div>
            <Header />

            <header className="header-mobile">
                <div className="lay">
                    <div className="row">
                        <div className="col-6">
                            <a href="/" className="header-mobile__logo">
                                <i className="logo-la-nacion"></i>
                            </a>
                        </div>
                        <div className="col-6 hlp-text-right">

                            <a>Suscribite</a>




                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className="lay-sidebar">
                    
                    <div className="sidebar__main">                  
                        <Head>
                            <title>Next.js SSR APP | Test La Nación</title>
                            <link rel="stylesheet" href="https://especiales.lanacion.com.ar/arc-css/css/site.css" rel="stylesheet" />
                        </Head>
                        
                        <div>
                            { props.children }
                        </div>
                        
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Container;