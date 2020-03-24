import React from 'react';
import {Link} from 'react-router-dom';
import RoomsContainer from '../components/RoomsContainer'

export default function Rooms() {
   return (
      <React.Fragment>
         <div className='roomsHero'>
            <div className='banner'>
               <h1>our rooms</h1>
               <div></div>
               <Link to='/' className='btn-primary'>
                  return home
               </Link>
            </div>
         </div>
         <RoomsContainer/>
      </React.Fragment>
   )
}
