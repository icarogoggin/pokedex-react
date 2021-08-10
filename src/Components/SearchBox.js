import { Link } from 'react-router-dom'

export default function SearchBox(filter) {
  return(
    <div className="app__list__searchbox">
      <div className="app__list__searchbox__container">
        <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png" alt="Pokémon"></img>
        <input 
          type="text"
          placeholder={filter.placeholder}
          onChange={filter.action}
        />
        
        <button>
          <Link to="/about">Sobre</Link>
        </button>
      </div>
      
    </div>
  )
}