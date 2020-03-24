import React from 'react';
import {RoomConsumer} from '../context';

const getUnique = (items, value) => {
   return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({rooms}) {
   return (
      <RoomConsumer>
         {value => {
            const {handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, threeMeals, pets} = value;

            let types = getUnique(rooms, 'type');
            types = ['all', ...types];
            types = types.map((item, index) => {
               return <option value={item} key={index}>{item}</option>
            });

            let people = getUnique(rooms, 'capacity');
            people = people.map((item, index) => {
               return <option key={index} value={item}>{item}</option>
            })

            return (
               <section className='filter-container'>
                  <div className='section-title'>
                     <h4>search rooms</h4>
                     <div></div>
                  </div>
                  <form className='filter-form'>
                     {/* TYPE */}
                     <div className='form-group'>
                        <label>room type</label>
                        <select
                           name='type'
                           id='type'
                           value={type}
                           className='form-control'
                           onChange={handleChange}
                        >
                           {types}
                        </select>
                     </div>

                     {/* CAPACITY */}
                     <div className='form-group'>
                        <label>Guests</label>
                        <select  
                           name='capacity'
                           id='capacity'
                           value={capacity}
                           className='form-control'
                           onChange={handleChange}
                        >
                           {people}
                        </select>
                     </div>

                     {/* PRICE */}
                     <div className='form-group'>
                        <label>room price <span className='color'>${price}</span></label>
                        <input 
                           type='range'
                           name='price'
                           min={minPrice}
                           max={maxPrice}
                           id='price'
                           value={price}
                           onChange={handleChange}
                           className='form-control'
                        />
                     </div>

                     {/* SIZE */}
                     <div className='form-group'>
                        <label>room size</label>
                        <input   
                           type='number'
                           name='minSize'
                           id='size'
                           value={minSize}
                           onChange={handleChange}
                           className='size-input'
                        />
                        <input   
                           type='number'
                           name='maxSize'
                           id='size'
                           value={maxSize}
                           onChange={handleChange}
                           className='size-input'
                        />
                     </div>

                     {/* EXTRAS */}
                     <div className='form-group'>
                        <div className='single-extra'>
                           <input 
                              type='checkbox'
                              name='breakfast' 
                              id='breakfast' 
                              checked={breakfast} 
                              onChange={handleChange} 
                           />
                           <label>breakfast</label>
                        </div>
                        <div className='single-extra'>
                           <input 
                              type='checkbox'
                              name='pets' 
                              id='pets' 
                              checked={pets} 
                              onChange={handleChange} 
                           />
                           <label>pets</label>
                        </div>
                        <div className='single-extra'>
                           <input 
                              type='checkbox'
                              name='threeMeals' 
                              id='threeMeals' 
                              checked={threeMeals} 
                              onChange={handleChange} 
                           />
                           <label>Three Meals</label>
                        </div>
                     </div>
                  </form>
               </section>
            )
         }}
      </RoomConsumer>
   )
}
