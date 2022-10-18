import { useState, useEffect } from 'react'
import apiConfig from '../../api/apiConfig'
import moviedbApi from '../../api/moviedbApi'

const Video = (props) => {
    const [video, setVideo] = useState()

    useEffect(() => {
        const fetchData = async () => {
            let response = null
            try {
                response = await moviedbApi.getVideos(props.category, props.id, { params: { api_key: apiConfig.apiKey } })
            } catch (error) {
                console.log(error)
            }
            let video = response.results.filter(x => x.name === 'Official Trailer')
            if(video.length > 0) {
                setVideo(video[0].key)
            } else if(response.results.length > 0) {
                setVideo(response.results[0].key)
            } else {
                setVideo(null)
            }
        }

        fetchData()
    }, [props.category, props.id])


    return (
        <>
             {video && <div className='iframe'><iframe src={`https://www.youtube.com/embed/${video}`} title='video'></iframe></div>}

        </>
    )
}

export default Video