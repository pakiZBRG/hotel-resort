import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {RoomConsumer} from '../context';

export default function RoomsContainer() {
   return (
      <RoomConsumer>
         {value => {
            const {sortedRooms, rooms} = value;
            return (
               <div>
                  <RoomFilter rooms={rooms}/>
                  <RoomList rooms={sortedRooms}/>
               </div>
            )
         }}
      </RoomConsumer>
   )
}
