import React from 'react'
import { SectionItem } from '../SectionItem/SectionItem'

import CityImage from '../../assets/images/city.jpg'
import MarkerIcon from '../../assets/icons/marker.png'

import '../../styles/components/PlaceVisit.scss'

export const PlaceVisit = () => {

   return(
      <SectionItem
         titleBold='Place to'
         titleLight='Visit'
      >
      <div className='PlaceVisit'>
         <span>
            <img src={MarkerIcon} alt='Icon marker' />
            <div>
               <p>Arab Street Singapure</p>
            </div>
         </span>
         <img src={CityImage} alt='Image place' />
      </div>
      </SectionItem>
   )
}