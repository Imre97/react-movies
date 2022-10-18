import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'

import moviedbApi from '../../api/moviedbApi'
import apiConfig from '../../api/apiConfig'

import './modal.scss'

const Backdrop = (props) => {

    useEffect(() => {
        if(props.modal.active) {
            document.body.classList.add('stop-scrolling')
        } else {
            document.body.classList.remove('stop-scrolling')
        }
    }, [props.modal.active])

    return (
        <div className={`backdrop ${props.modal.active ? 'modal-active' : ''}`} onClick={() => props.setModal(prev => { return {...prev, active: false}})}></div>
    )
}

const ModalOverlay = props => {
    const [video, setVideo] = useState()

    useEffect(() => {
        const fetchData = async () => {
            let response = null
            try {
                response = await moviedbApi.getVideos(props.modal.category, props.modal.id, { params: { api_key: apiConfig.apiKey } })
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
    }, [props.modal.id])
    return (
        <div className={`modal ${props.modal.active ? 'modal-active' : ''}`}>
            <div className='iframe'>
                <iframe src={`https://www.youtube.com/embed/${video}`} title='video'></iframe>
                {!video && <p>Trailer not found</p>}
            </div>
        </div>
    )
}


const Modal = props => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop modal={props.modal} setModal={props.setModal}/>, document.getElementById('overlays'))}
            {ReactDOM.createPortal(<ModalOverlay modal={props.modal} setModal={props.setModal}>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
        </>
    )
}

export default Modal