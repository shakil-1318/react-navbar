import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
    state={clicked:false}
    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return (
            <>
              <nav className="navbarItems">
                <h1 className="navbar-logo">React <i className='fab fa-react'></i></h1>
            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                <li><a className='nav-links' href="#">Home</a></li>
                <li><a className='nav-links' href="#">Services</a></li>
                <li><a className='nav-links' href="#">Products</a></li>
                <li><a className='nav-links' href="#">Contact us</a></li>
                <li><a className='nav-links-mobile' href="#">Sign up</a></li>
            </ul>
            </nav>   
            </>
        );
    }
}

export default Navbar;




// import React from 'react';
// import './Navbar.css'

// const Navbar = () => {
//     state={clicked:false}
//     return (
//         <>
//             <nav className="navbarItems">
//                 <h1 className="navbar-logo">React <i className='fab fa-react'></i></h1>
//             <div className="menu-icon" onClick={this.handleClick}>
//                 <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
//             </div>
//             <ul>
//                 <li><a className='nav-links' href="#">Home</a></li>
//                 <li><a className='nav-links' href="#">Services</a></li>
//                 <li><a className='nav-links' href="#">Products</a></li>
//                 <li><a className='nav-links' href="#">Contact us</a></li>
//                 <li><a className='nav-links-mobile' href="#">Sign up</a></li>
//             </ul>
//             </nav>
//         </>
//     );
// };

// export default Navbar;