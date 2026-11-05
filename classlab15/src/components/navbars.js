import React from 'react';
import {Link} from 'react-router-dom';

const Navbars = function(){
    return(
        <>
            <header>
                <nav className = "navbar">
                    <div>
                        <a href="https:/www.qcc.cuny.edu" target = "blank" className = "link">QCC</a>
                    </div>
                    <div className = "btngroup">
                        <button><Link to = '/contact'>Contact Us</Link></button>
                        <button><Link to = '/'>Home</Link></button>
                        <button><Link to = '/about'>About Us</Link></button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbars