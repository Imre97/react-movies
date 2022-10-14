import { useEffect, useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"

import apiConfig from "../../api/apiConfig"
import moviedbApi, {category} from "../../api/moviedbApi"

import MovieCard from "../movie-card/MovieCard"

import './movie-list.scss'

const MovieList = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let response = []
            try {
                if (props.category !== 'similar') {
                    switch (props.category) {
                        case category.movie:
                            response = await moviedbApi.getMoviesList(props.type, {params: {api_key: apiConfig.apiKey}}) 
                            break
                        default:
                            response = await moviedbApi.getTvList(props.type, {params: {api_key: apiConfig.apiKey}})
                            break
                    }
                }
                setData(response.results)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()
    },[])



    return(
        <div className='movie-list'>
            
            <Swiper
                spaceBetween={10}
                slidesPerView={'auto'}
                grabCursor={true}
            >

                {data.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <MovieCard item={item} />
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    )
}

export default MovieList