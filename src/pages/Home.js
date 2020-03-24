import React from 'react';
import {Link} from 'react-router-dom';
import Service from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
   return (
      <React.Fragment>
         <header className='defaultHero'>
            <div className='banner'>
               <h1>Paki's Resort</h1>
               <div></div>
               <p>deluxe rooms starting at 103.99$</p>
               <Link to='/rooms' className='btn-primary'>
                  rooms
               </Link>
            </div>
         </header>
         <Service/>
         <FeaturedRooms/>
      </React.Fragment>
   )
}
