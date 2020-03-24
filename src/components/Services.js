import React, { Component } from 'react';
import {FaBeer, FaHiking, FaCocktail, FaShuttleVan, FaApple, FaWifi, FaUmbrellaBeach, FaSwimmingPool, FaParking, FaClinicMedical} from 'react-icons/fa';
import {MdRestaurant, MdFitnessCenter} from 'react-icons/md';

export default class Services extends Component {
   state = {
      services: [
         {
            icon: <FaCocktail/>,
            title: 'Free Cocktails',
            info: "Free cocktail for every night out in our hotel"
         },
         {
            icon: <FaHiking/>,
            title: 'Endless Hiking',
            info: "Hike as much as you want. Or can, hey we don't judge"
         },
         {
            icon: <FaShuttleVan/>,
            title: 'Free Shuttle',
            info: "Take trips in our vans. No, not that van"
         },
         {
            icon: <FaBeer/>,
            title: 'Strongest Beer',
            info: "Beer meant only to the strongest men, or liver"
         },
         {
            icon: <FaApple/>,
            title: 'Apple Support',
            info: "Watch latest shows and programs on Apple TVs"
         },
         {
            icon: <FaWifi/>,
            title: 'Free Wi-Fi',
            info: "Use our unlimited Wi-Fi, for whatever Internet can get you"
         },
         {
            icon: <FaUmbrellaBeach/>,
            title: 'Private Beach',
            info: "Yes, we have our beach, so what"
         },
         {
            icon: <FaSwimmingPool/>,
            title: 'Indoor pool',
            info: "If you are fed up from the sun and sand, hey we have a solution for that"
         },
         {
            icon: <MdRestaurant/>,
            title: 'Restaurant',
            info: "Try our scrumptious meals. Do not eat your fingers, okay."
         },
         {
            icon: <MdFitnessCenter/>,
            title: 'Fintess Center',
            info: "Keep your body in shape, while on vacation?"
         },
         {
            icon: <FaParking/>,
            title: 'Free Parking',
            info: "Well it's self explanatory"
         },
         {
            icon: <FaClinicMedical/>,
            title: 'Med Clinic',
            info: "if you get hurt we cant patch you up"
         }
      ]
   }
   render() {
      return (
         <section className='services'>
            <div className='section-title'>
               <h4>Our Services</h4>
               <div></div>
            </div>
            <div className='services-center'>
               {this.state.services.map((service, index) => {
                  return <article key={index} className='service'>
                           <span>{service.icon}</span>
                           <h3>{service.title}</h3>
                           <p>{service.info}</p>
                        </article>
               })}
            </div>
         </section>
      )
   }
}
