import React from 'react'

import { ForecastItem } from './ForecastItem'
import { SectionItem } from '../SectionItem/SectionItem'

import '../../styles/components/Forecast.scss'

export const Forecast = () => {

   const mockData = new Array(3).fill(0)

   return(
      <SectionItem
         titleBold='3 Days'
         titleLight='Forecast'
      >
         <ul>
            {
               mockData.map((item, i) =>
                  <li key={i}>
                     {i === 0 ?
                        <ForecastItem
                           index={i}
                           background='#7c67f0'
                           color='#fff'
                        />
                        :
                        <ForecastItem />
                     }
                  </li>
               )
            }
         </ul>
      </SectionItem>
   )
}