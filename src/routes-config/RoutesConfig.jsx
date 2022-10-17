import { Routes, Route } from 'react-router'
import Catalog from '../pages/Catalog'

import Home from '../pages/Home'
import Detail from '../pages/detail/Detail'

const RoutesConfig = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path=':category' element={ <Catalog />} />
            <Route path='/:category/:id' element={ <Detail />} />
        </Routes>
    )
}

export default RoutesConfig