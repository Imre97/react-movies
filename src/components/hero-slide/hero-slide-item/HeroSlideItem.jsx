import apiConfig from "../../../api/apiConfig"
import Button, { OutlineButton } from "../../button/Button"

import { useNavigate } from "react-router-dom"

import './hero-slide-item.scss'

const HeroSlideItem = props => {
    const { item } = props

    const navigate = useNavigate()

    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)

    return (
        <div className={`hero-slide__item ${props.className}`} style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-slide__item-content container">
                <div className="hero-slide__item-content-info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <Button onClick={() => navigate('/movie/' + item.id)}>
                            Watch movie
                        </Button>
                        <OutlineButton onClick={() => props.setModal({ active: true, category: 'movie', id:item.id })}>
                            Watch Trailer
                        </OutlineButton>
                    </div>
                </div>
                <div className="hero-slide__item-content-poster">
                    <img src={`${apiConfig.w500Image(item.poster_path)}`} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroSlideItem