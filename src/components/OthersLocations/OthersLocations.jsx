import React from 'react'

import { OthersLocationsItem } from './OthersLocationsItem'

import { AddLocations } from './AddLocations'

import '../../styles/components/OthersLocations.scss'

export const OthersLocations = () => {

   return(
      <div className='OthersLocations'>
         <ul>
            <li>
               <OthersLocationsItem />
            </li>
            <li>
               <OthersLocationsItem />
            </li>
         </ul>
         <AddLocations />
      </div>
   )
}