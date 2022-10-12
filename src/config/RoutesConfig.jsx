import { Routes, Route } from 'react-router'
import Catalog from '../pages/Catalog'

import Home from '../pages/Home'

const RoutesConfig = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path=':category' element={ <Catalog />} />
        </Routes>
    )
}

export default RoutesConfig