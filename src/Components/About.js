import { Link } from 'react-router-dom'
import eu from '../Img/eu.jpg'

export default function About() {
  return(
    <div className="app__about">
      <div className="app__about__container">
        <h1>Essa é a minha aplicação!</h1>
        <p className="app__about__header"> Este é meu primeiro projeto feito com React consumindo uma API! </p>
        <img className="app__about__react" src="https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif" alt="react" />

        <p className="app__about__main">Me chamo Ícaro Goggin, nascido e criado no interior de pernambuco. Agora, aos 27 anos, estou iniciando minha carreira como dev Front-End com tendencias fullstack.</p>

        <img className="app__about__eu" src={eu} alt="eu" />

        <p className="app__about__close">Achou legal? chega mais!</p>

        <div className="app__about__links">
          <a href="https://github.com/icarogoggin" target="_blank" rel="noreferrer">
            <i class="im im-github"></i>
          </a>

          <a href="https://www.linkedin.com/in/icarogoggin/" target="_blank" rel="noreferrer">
            <i class="im im-linkedin"></i>
          </a>
        </div>



        <Link className="app__about__link" to="/">Voltar</Link>
      </div>
      
    </div>
  )
}