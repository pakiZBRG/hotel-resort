import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import StyledHero from '../components/Styled';

export default class SingleRoom extends Component {
   constructor(props) {
      super(props)
      this.state = {
         slug: this.props.match.params.slug
      }
   }
   static contextType = RoomContext;

   render() {
      const {getRoom} = this.context;
      const room = getRoom(this.state.slug);
      if(!room) {
         return (
            <div className='error'>
               <h3>The particular room cannot be found</h3>
               <Link to='/rooms' className='btn-primary'>
                  back to rooms
               </Link>
            </div>
         )
      }

      const {name, price, size, capacity, pets, breakfast, threeMeals, description, extras, bathExtras, images} = room;
      return (
         <React.Fragment>
            <StyledHero img={images[0]}>
               <div className='banner'>
                  <h1>{`${name} room`}</h1>
                  <div></div>
                  <Link to='/' className='btn-primary'>
                     back to rooms
                  </Link>
               </div>
            </StyledHero>
            <section className='single-room'>
               <div className='single-room-images'>
                  <img src={images[0]} alt='img1'/>
                  <img src={images[1]} alt='img2'/>
                  <img src={images[2]} alt='img3'/>
               </div>
               <div className='single-room-info'>
                  <article className='desc'>
                     <h3>Details</h3>
                     <p>{description}</p>
                  </article>
                  <article className='info'>
                     <h3>info</h3>
                     <h6>price: <span className='color'>${price}</span></h6>
                     <h6>size: <span className='color'>{size}M²</span></h6>
                     <h6>max capacity: <span className='color'>{ capacity > 1 ? `${capacity} people` : `${capacity} person`}</span></h6>
                     <h6><span className='color'>{ pets ? "pets allowed" : "no pets allowed"}</span></h6>
                     <h6><span className='color'>{ breakfast ? 'free breakfast included' : 'no breakfast'}</span></h6>
                     <h6><span className='color'>{ threeMeals ? 'three meals included' : 'no food'}</span></h6>
                  </article>
               </div>
            </section>
            <section className='room-extras'>
               <h6>Extras</h6>
               <ul className='extras'>
                  {extras.map((item, index) => {
                     return <li key={index}>- {item}</li>
                  })}
               </ul>
               <h6 style={{paddingTop: '25px'}}>Bath Extras</h6>
               <ul className='extras'>
                  {bathExtras.map((item, index) => {
                     return <li key={index}>- {item}</li>
                  })}
               </ul>
            </section>
         </React.Fragment>
      )
   }
}
