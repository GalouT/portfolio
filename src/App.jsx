import "./App.css";
import Footer from "./components/Footer";
import TecnologiaIcono from "./components/TecnologiaIcono";
import RedSocial from "./components/redes/RedSocial";
import fotoAv from "./images/avatar/galoo.jpeg";
import linkedinIcon from "./images/iconos/icons8-linkedin-96.png";
import githubIcon from "./images/iconos/icons8-github-96.png";
import mailIcon from "./images/iconos/mail.png";
import IconoRedSocial from "./components/redes/iconosRedes/IconoRedSocial";
import IconoHtml from "./images/iconos/html.png";
import IconoCss from "./images/iconos/css.png";
import IconoJs from "./images/iconos/javascript.png";
import IconoReact from "./images/iconos/react.png";

function App() {
  return (
    <>
      <div className="nav-bar">
        <a href="#sobre-mi">Sobre mi</a>
        <a href="#contacto">Contacto</a>
        <a href="#proyectos">Proyectos</a>
      </div>
      <div className="tarjeta">
        <img className="tarjeta_avatar" src={fotoAv} alt="foto-avatar" />
        <div className="tarjeta_titulo">
          <h1>Hola, soy Galo!</h1>
        </div>
        <div>
          <p className="disponible">Disponible para trabajar</p>
        </div>
        <div className="presentacion">
          <p id="sobre-mi">
            Soy un apasionado aspirante a desarrollador web frontend. Aunque
            estoy dando mis primeros pasos en este mundo, me da mucho
            entusiasmo. A pesar de no contar con experiencia profesional,
            realicé proyectos personales que demuestran mi habilidad para
            enfrentar desafíos y encontrar soluciones creativas. Aprendo rápido
            y me interesa incorporar nuevas tecnologías y tendencias en el
            desarrollo frontend. Mi objetivo es contribuir al mundo del
            desarrollo web construyendo experiencias que no solo cumplan con los
            estándares, sino que también superen las expectativas de los
            usuarios.
          </p>
        </div>
        <div>
          <nav className="redes-sociales" id="contacto">
            <RedSocial href="https://www.linkedin.com/in/galo-tutanoski-261aa0122/">
              <IconoRedSocial
                src={linkedinIcon}
                width="50px"
                height="50px"
                alt="linkedin"
              />
              Linkedin
            </RedSocial>
            <RedSocial href="https://github.com/GalouT">
              <IconoRedSocial
                src={githubIcon}
                width="50px"
                height="50px"
                alt="github"
              />
              GitHub
            </RedSocial>
            <RedSocial href="mailto:galotutanoski@gmail.com">
              <IconoRedSocial
                src={mailIcon}
                width="50px"
                height="50px"
                alt="mail"
              />
              galotutanoski@gmail.com
            </RedSocial>
          </nav>
        </div>
        <div className="tecnologias">
          <h2>Tecnologías que domino</h2>
          <p>
            En esta sección, te presento un catálogo visual de las tecnologías
            en las que me perfecciono dia a dia.
          </p>
        </div>
        <nav className="iconos-tecnologias">
          <TecnologiaIcono src={IconoHtml} alt="html5" width={96} height={96} />
          <TecnologiaIcono src={IconoCss} alt="css3" width={96} height={96} />
          <TecnologiaIcono
            src={IconoJs}
            alt="javascript"
            width={96}
            height={96}
          />
          <TecnologiaIcono
            src={IconoReact}
            alt="react"
            width={96}
            height={96}
          />
          <TecnologiaIcono
            src={githubIcon}
            alt="github"
            width={96}
            height={96}
          />
        </nav>
        <div className="tecnologias">
          <span className="tecnologias-titulo">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/bubbles/100/office.png"
              alt="office"
            />
            <h2 className="proyectos" id="proyectos">
              Mis proyectos
            </h2>
          </span>
          <p>
            A continuación, un listado con los proyectos donde puse en práctica
            mis conocimientos
          </p>
          <div className="proyectos_lista">
            <ul>
              <li>
                <a
                  href="https://poke-memo-five.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Poke Memo
                </a>
              </li>
              <li>
                <a
                  href="https://to-do-list-ten-inky.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lista de tareas
                </a>
              </li>
              <li>
                <a
                  href="https://ta-te-ti-woad.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ta Te Ti
                </a>
              </li>
              <li>
                <a
                  href="https://tirar-moneda.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cara o Cruz
                </a>
              </li>
              <li>
                <a
                  href="https://sudoku-iota-pearl.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sudoku
                </a>
              </li>
            </ul>
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
export default App;
