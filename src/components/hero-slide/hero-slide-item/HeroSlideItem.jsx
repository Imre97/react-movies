import apiConfig from "../../../api/apiConfig"

import './hero-slide-item.scss'

const HeroSlideItem = props => {
    const { item } = props

    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)

    return (
        <div className={`hero-slide__item ${props.className}`} style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-slide__item-content container">
                <div className="hero-slide__item-content-info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                </div>
                <div className="hero-slide__item-content-poster">
                    <img src={`${apiConfig.w500Image(item.poster_path)}`} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroSlideItem