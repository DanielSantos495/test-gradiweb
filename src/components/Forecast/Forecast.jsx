import React from 'react'

import { ForecastItem } from './ForecastItem'
import { SectionItem } from '../SectionItem/SectionItem'
import { GetDataContainer } from '../../containers/GetDataContainer'

import config from '../../../config'

import '../../styles/components/Forecast.scss'

const renderProp = ({ loading, error, data }) => {

   const { daily = [{}]} = data
   const ThreeDaysForecast = daily.filter((item, i) =>  i < 3)

   return(
      <ul>
         {
            ThreeDaysForecast.map((item, i) =>
               <li key={i}>
                  {i === 0 ?
                     <ForecastItem
                        index={i}
                        background='#7c67f0'
                        color='#fff'
                        {...item}
                     />
                     :
                     <ForecastItem {...item} />
                  }
               </li>
            )
         }
      </ul>
   )
}

export const Forecast = () => {

   const coordinatesBogota = {
      lat: '4.6097',
      lon: '-74.0817'
   }

   const API = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinatesBogota.lat}&lon=${coordinatesBogota.lon}&exclude=hourly,minutely&appid=${config.key}`

   return(
      <SectionItem
         titleBold='3 Days'
         titleLight='Forecast'
      >
         <GetDataContainer api={API}>
            {renderProp}
         </GetDataContainer>
      </SectionItem>
   )
}