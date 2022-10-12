import { useState, useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'

import moviedbApi, { movieType } from '../../api/moviedbApi'
import HeroSlideItem from './hero-slide-item/HeroSlideItem'

const HeroSlide = () => {
    SwiperCore.use([Autoplay])
    const [movies, setMovies] = useState([])


    useEffect(() => {
        const fetchMovie = async () => {
            const params = {page: 1}
            try {
                const response = await moviedbApi.getMoviesList(movieType.popular, params)
                setMovies(response.result.slice(1,5))

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
                            {({isActice}) => (
                                <HeroSlideItem item={item} className={`${isActice ? 'active' : ''}`} />
                            )}
                        </SwiperSlide>
                    )
                })}
                
            </Swiper>


        </div>
    )
}

export default HeroSlide