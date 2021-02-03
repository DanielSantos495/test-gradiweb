import React from 'react'

import MockIcon from '../../assets/icons/marker.png'

import '../../styles/components/OthersLocationsItem.scss'

export const OthersLocationsItem = () => {

   return(
      <div className='OthersLocationsItem'>
         <div>
            <span>
               <img src={MockIcon} alt='Weather icon' />
            </span>
            <p>29<span>°c</span></p>
            <span>
               <p>Paris</p>
               <p>Francia</p>
            </span>
         </div>
         <div>
            <p>Humidity 64%</p>
            <p>Humidity 64%</p>
            <p>West 8.3km/h</p>
         </div>
      </div>
   )
}