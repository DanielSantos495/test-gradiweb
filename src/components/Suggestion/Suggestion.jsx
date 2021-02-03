import React from 'react'

import MarkerIconWhite from '../../assets/icons/marker-white.png'
import StarIcon from '../../assets/icons/star.png'
import ImageReview from '../../assets/images/reviews.png'
import MuseumImage from '../../assets/images/museum.jpg'
import ForVisitImage from '../../assets/images/forvisit.jpg'

import '../../styles/components/Suggestion.scss'

export const Suggestion = () => {

   return(
      <section className='Suggestion'>
         <div className='Suggestion__reviews'>
            <div>
               <img src={StarIcon} alt='Star icon' />
               <p>Top Reviews</p>
            </div>
            <div>
               <span>
                  <img src={ImageReview} alt='Person review image' />
               </span>
               <span>
                  <img src={ImageReview} alt='Person review image' />
               </span>
               <span>
                  <img src={ImageReview} alt='Person review image' />
               </span>
               <span>6+</span>
            </div>
         </div>
         <div className='Suggestion__place'>
            <span>
               <img src={MarkerIconWhite} alt='Icon marker' />
               <div>
                  <p>Art Science Museum</p>
               </div>
            </span>
            <img src={MuseumImage} alt='Image place' />
         </div>
         <div className='Suggestion__place-two'>
            <span>
               <img src={MarkerIconWhite} alt='Icon marker' />
               <div>
                  <p>Fountain of youth</p>
               </div>
            </span>
            <img src={ForVisitImage} alt='Image place' />
            <button>+</button>
         </div>
      </section>
   )
}