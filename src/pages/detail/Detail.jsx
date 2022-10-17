import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import moviedbApi from '../../api/moviedbApi'
import apiConfig from '../../api/apiConfig'

import './detail.scss'
import Casts from './Casts'
import Video from './Video'
import MovieList from '../../components/movie-list/MovieList'

const Detail = () => {
    const [item, setItem] = useState()

    const { category, id } = useParams()

    useEffect(() => {
        const fethcData = async () => {
            let response = null
            try {
                response = await moviedbApi.detail(category, id, { params: { api_key: apiConfig.apiKey } })
            } catch (error) {
                console.log(error)
            }
            setItem(response)
        }

        fethcData()
    }, [category, id])



    return (
        <>
            {item && (
                <>
                    <div className='banner' style={{ backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)})` }}></div>
                    <div className='mb-2 movie-content'>
                        <div className='movie-content__poster'>
                            <img src={apiConfig.w500Image(item.poster_path ? item.poster_path : item.backdrop_path)} alt={item.name} />
                        </div>
                        <div className='movie-content__info'>
                            <h1 className='title'>{item.title || item.name}</h1>
                            <div className='genres'>
                                {item.genres.map(x => {
                                    return (
                                        <span className='genres-item' key={x.id}>{x.name}</span>
                                    )
                                })}
                            </div>
                            <p className='overview'>
                                {item.overview}
                            </p>
                            <div className='casts-list'>
                                <div className='casts-list__header'>
                                    <h2>Casts</h2>
                                </div>
                                <Casts id={item.id} category={category} />
                            </div>
                        </div>
                    </div>

                    <div className='container'>
                        <div className='section mb-2'>
                            <Video category={category} id={id} />
                        </div>
                    </div>

                    <div className='container'>
                        <div className='section mb-3'>
                            <div className='section-header mb-2'>
                                <h2>Similar</h2>
                            </div>
                            <MovieList category={'similar'} id={item.id} cat={category} />
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Detail