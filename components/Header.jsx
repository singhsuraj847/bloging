import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {getCategories} from '../services'



const Header = () => {
     const [categories, setCategories] = useState([])
    const [menuActive, setMenuActive] = useState(false);
    useEffect(() => {
        getCategories().then((newCategories)=> setCategories(newCategories) )
    }, [])
    return (
        <nav className="site-navigation">
            <span className="menu-title">Rise With Tech</span>
            <div className={`menu-content-container ${menuActive && "active"}`}>
                <ul>
                    {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span>
                            {category.name}
                        </span>
                    </Link>
                   ))}
                </ul>
            </div>
        </nav>
    )
}

export default Header
