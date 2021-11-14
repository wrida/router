import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = (movie) => {
    return (
    <div>
        <Link style={{fontSize: '25px',paddingLeft:'80px',paddingRight:'20px',fontFamily:'fantasy'}} to ='/'> Home </Link>
        <Link style={{fontSize: '25px',paddingLeft:'80px',paddingRight:'20px',fontFamily:'fantasy'}} to ='/movielist'>Movielist  </Link>
       
    </div>
    )
}

export default Navbar