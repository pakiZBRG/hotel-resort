import React, { Component } from 'react';
import {RoomContext} from './../context';
import Room from './Room';

export default class FeaturedRooms extends Component {
   static contextType = RoomContext;
   render() {  
      let {featuredRooms : fRooms} = this.context;
      fRooms = fRooms.map(room => {
         return <Room key={room.id} room={room}/>
      })
      return (
         <section className='featured-rooms'>
            <div className='section-title'>
               <h4>Featured Rooms</h4>
               <div></div>
            </div>
            <div className='featured-rooms-center'>
               {fRooms}
            </div>
         </section>
      )
   }
}
