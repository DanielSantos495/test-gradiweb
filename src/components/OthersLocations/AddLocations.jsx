import React from 'react'

import CityIcon from '../../assets/icons/city.png'

import '../../styles/components/AddLocations.scss'

export const AddLocations = () => {

   return(
      <div className='AddLocations'>
         <button type='button'>
            Add Locations
         </button>
         <img src={CityIcon} alt='City icon' />
      </div>
   )
}