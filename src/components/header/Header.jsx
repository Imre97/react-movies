import { Link, useLocation } from 'react-router-dom'

import './header.scss'

const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movies'
    },
    {
        display: 'TV series',
        path: '/tv'
    }
]

const Header = () => {
    const { pathname } = useLocation()

    const active = headerNav.findIndex(x => x.path === pathname)


    return (
        <div className='header'>
            <div className='header__wrap container'>
                <div>
                    Logo
                </div>
                <ul className='header__nav'>
                    {headerNav.map((item, i) => {
                        return (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={item.path}>
                                    {item.display}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Header