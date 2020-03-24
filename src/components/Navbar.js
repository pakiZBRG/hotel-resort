import React, { Component } from 'react';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
   state = {
      isOpen: false
   }

   handleToggle = () => {
      this.setState({ isOpen: !this.state.isOpen })
   }

   render() {
      return (
         <nav className='navbar'>
            <div className='nav-center'>
               <div className='nav-header'>
                  <h3 className='call'>CallCenter: +381 989 03 87</h3>
                  <Link to='/' className='no'>
                     <h2>Paki's Resort</h2>
                  </Link>
                  <button className='nav-btn' onClick={this.handleToggle}>
                     <FaAlignRight className='nav-icon'/>
                  </button>
               </div>
               <ul className={this.state.isOpen ? 'nav-links show-nav' : "nav-links"}>
                  <li>
                     <Link to='/'>Home</Link>
                  </li>
                  <li>
                     <Link to='/rooms'>Rooms</Link>
                  </li> 
               </ul>
            </div>
         </nav>
      )
   }
}
