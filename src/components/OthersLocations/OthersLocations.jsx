import React from 'react'

import { OthersLocationsItem } from './OthersLocationsItem'
import { AddLocations } from './AddLocations'

import config from '../../../config'

import '../../styles/components/OthersLocations.scss'

export const OthersLocations = () => {

   const API = (country) => `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${config.key}`

   return(
      <section className='OthersLocations'>
         <ul>
            <li>
               <OthersLocationsItem
                  api={API('paris')}
               />
            </li>
            <li>
               <OthersLocationsItem
                  api={API('marsella')}
               />
            </li>
         </ul>
         <AddLocations />
      </section>
   )
}