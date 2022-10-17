import { useState, useEffect } from 'react'
import apiConfig from '../../api/apiConfig'

import moviedbApi from '../../api/moviedbApi'

const Casts = (props) => {
    const [casts, setCasts] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            let response = null
            try {
                response = await moviedbApi.credits(props.category, props.id, {params: {api_key: apiConfig.apiKey}})
            } catch (error) {
                console.log(error)
            }
            setCasts(response.cast.slice(1,6))
        }

        fetchData()
    }, [props.category, props.id])


    return (
        <div className='casts'>
            {casts.map(cast => {
                return (
                    <div className='casts-item' key={cast.id}>
                        <div className='casts-item__image' style={{backgroundImage: `url(${apiConfig.w500Image(cast.profile_path)})`}}></div>
                        <p className='casts-item__name'>{cast.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Casts