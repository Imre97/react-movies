import apiConfig from "../../api/apiConfig"

import './movie-card.scss'

const MovieCard = (props) => {
    const { item } = props
    const poster = apiConfig.w500Image(item.poster_path ? item.poster_path : item.backdrop_path)

    return (
        <div className="movie-card">
            <img src={`${poster}`} alt={`${item.title}`} />
            <h3>
                {item.title || item.name}
            </h3>
        </div>
    )
}

export default MovieCard