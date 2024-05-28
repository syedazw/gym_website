'use client';

import {Link as ScrollLink} from 'react-scroll'

const links =[
    {name: 'Home', target: 'home', offset: -100},
    {name: 'Events', target: 'events', offset: -80},
    {name: 'About', target: 'about', offset: -80},
    {name: 'Contact', target: 'contact', offset: 0},
]

const MobileNavbar = ({containerStyles}: {containerStyles: string}) => {
    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) =>{
                return <ScrollLink 
                offset={link.offset} 
                to={link.target} 
                smooth spy 
                activeClass='active'
                key={index}>
                {link.name}</ScrollLink>
            })}
        </nav>
    )
}
export default MobileNavbar;