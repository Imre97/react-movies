import { useState, useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'

import moviedbApi, { movieType } from '../../api/moviedbApi'
import HeroSlideItem from './hero-slide-item/HeroSlideItem'
import apiConfig from '../../api/apiConfig'

const HeroSlide = () => {
    SwiperCore.use([Autoplay])
    const [movies, setMovies] = useState([])


    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await moviedbApi.getMoviesList(movieType.popular, {params: {page: 1, api_key: apiConfig.apiKey}})
                setMovies(response.results.slice(1,5))
            } catch (error) {
                console.log(error)
            }
        }

        fetchMovie()
    }, [])


    return (
        <div className="hero-slide">

            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                grabCursor={true}
            >
                {movies.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            {({isActive}) => (
                                <HeroSlideItem item={item} className={isActive ? 'active' : ''} />
                            )}
                        </SwiperSlide>
                    )
                })}
                
            </Swiper>


        </div>
    )
}

export default HeroSlide