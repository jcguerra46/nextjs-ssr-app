import Head from 'next/head';

/** Components */
import Header from './header';
import Footer from './footer';

const Container = (props) => {
    return (
        <div>
            <Header />
            <main>
                <div className="lay-sidebar">
                    
                    <div className="sidebar__main">                  
                        <Head>
                            <title>Next.js SSR APP | Test La Nación</title>
                            <link rel="stylesheet" href="http://especiales.lanacion.com.ar/arc-css/css/site.css" />
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