import Link from 'next/link';
import FizzBuzz from '../components/fizzbuzz';

export default function Home() {

  return (
    <div>
      <header>
          <title>Technical Test | La Nación</title>
          <link rel="stylesheet" href="https://getbootstrap.com/docs/4.5/dist/css/bootstrap.min.css" />
      </header>
      <main role="main">
        <section className="jumbotron text-center">
          <div className="container">
            <h1>La Nación | Techncial Test</h1>
            <p>Juan Carlos Guerra <br /> 
              <small>
              <a href="https://www.linkedin.com/in/jcguerra/" 
              target="_blank">LinkedIn</a> - <a href="https://bitbucket.org/jcguerra46/" 
              target="_blank">Bitbucket</a>
              </small>
            </p>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
              <h2>Ejercicio 1</h2>
                <div className="card mb-6 shadow-sm">
                  <div className="card-body">
                    <h3>Grilla de articulos</h3>
                    <p className="card-text">
                      NextJS-SSR-APP
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link href="/articles">
                          <a className="btn btn-primary my-2">Ver artículos</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
              <h2>Ejercicio 2</h2>
                <div className="card mb-6 shadow-sm">
                  <div className="card-body">
                  <h3>FizzBuzz</h3>
                    <div className="d-flex justify-content-between align-items-center">
                      <FizzBuzz />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
