import React from 'react';
import {Link} from 'react-router-dom';

export default function Error() {
   return (
      <div className='defaultHero'>
         <div className='banner'>
            <h1>404 Error</h1>
            <div></div>
            <p>page not found</p>
            <Link to='/' className='btn-primary'>
               return home
            </Link>
         </div>
      </div>
   )
}
