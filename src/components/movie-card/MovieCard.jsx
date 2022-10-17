import { Link } from 'react-router-dom'

import apiConfig from "../../api/apiConfig"

import Button from "../button/Button"

import './movie-card.scss'

const MovieCard = (props) => {
    const { item } = props
    const poster = apiConfig.w500Image(item.poster_path ? item.poster_path : item.backdrop_path)


    return (
        <Link to={`/${props.category}/${item.id}`}>
            <div className="movie-card" style={{ backgroundImage: `url(${poster})` }}>
                <Button>Watch Movie</Button>
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    )
}

export default MovieCard