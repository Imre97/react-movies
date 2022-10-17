import { useParams } from "react-router-dom"
import MovieGrid from "../components/movie-grid/MovieGrid"

import PageHeader from "../components/page-header/PageHeader"

const Catalog = () => {

    const { category } = useParams()
    console.log(category)


    return(
        <div>
            <PageHeader>
                {category === 'movie' ? 'Movies' : 'TV Series'}
            </PageHeader>
            <MovieGrid category={category} />
        </div>
    )
}

export default Catalog