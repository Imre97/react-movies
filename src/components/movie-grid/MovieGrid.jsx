import MovieCard from '../movie-card/MovieCard'

import { useState, useEffect } from "react"

import apiConfig from "../../api/apiConfig"
import moviedbApi, { category, movieType, tvType } from '../../api/moviedbApi'

import { OutlineButton } from '../button/Button'

import './movie-grid.scss'



const MovieGrid = (props) => {
    const [items, setItems] = useState([])

    const [pageIndex, setPageIndex] = useState(1)
    const [totalPageIndex, setTotalPageIndex] = useState(null)


    useEffect(() => {
        const fetchData = async () => {
            let response = null
            try {
                switch (props.category) {
                    case category.movie:
                        response = await moviedbApi.getMoviesList(movieType.popular, { params: { api_key: apiConfig.apiKey } })
                        break
                    default:
                        response = await moviedbApi.getTvList(tvType.popular, { params: { api_key: apiConfig.apiKey } })
                        break
                }
            } catch (error) {
                console.log(error)
            }
            setItems(response.results)
            setTotalPageIndex(response.total_pages)
        }

        fetchData()
    }, [props.category])

    const loadMore = async () =>{
        let response = null
        try {
            switch (props.category) {
                case category.movie:
                    response = await moviedbApi.getMoviesList(movieType.popular, { params: { page: pageIndex + 1, api_key: apiConfig.apiKey } })
                    break
                default:
                    response = await moviedbApi.getTvList(tvType.popular, { params: { page: pageIndex + 1, api_key: apiConfig.apiKey } })
                    break
            }
        } catch (error) {
            console.log(error)
        }
        setItems(prevItems => [...prevItems, ...response.results])
        setPageIndex(prev => prev + 1)
    }


    return (
        <>
            <div className='movie-grid container mb-3'>
                {items.map(item => {
                    return (
                        <MovieCard key={item.id} item={item} category={props.category} />
                    )
                })}
            </div>
            {pageIndex < totalPageIndex ? (
                <div className='movie-grid-loadmore'>
                    <OutlineButton className='small mb-3' onClick={loadMore}>
                        Load more
                    </OutlineButton>
                </div>
            ) : null }
        </>
    )
}

export default MovieGrid