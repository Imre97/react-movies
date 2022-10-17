import './page-header.scss'

import bgImage from '../../assets/Movies-background.webp'

const PageHeader = (props) => {
    return (
        <div className='page-header' style={{backgroundImage: `url(${bgImage})`}}>
            <h2>{props.children}</h2>
        </div>
    )
}

export default PageHeader