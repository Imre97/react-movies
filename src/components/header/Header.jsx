import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './header.scss'

const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'TV Series',
        path: '/tv'
    }
]

const Header = () => {
    const { pathname } = useLocation()
    const refHeader = useRef()

    const active = headerNav.findIndex(x => x.path === pathname)

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                refHeader.current.classList.add('shrink')
            } else {
                refHeader.current.classList.remove('shrink')
            }
        }

        window.addEventListener('scroll', shrinkHeader)

        return () => {
            window.removeEventListener('scroll', shrinkHeader)
        }

    }, [])

    return (
        <div className='header' ref={refHeader}>
            <div className='header__wrap container'>
                <Link to='/'>
                    <h1>
                        ReactMovies
                    </h1>
                </Link>
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