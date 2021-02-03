import React from 'react'

import { KelvinToCentigrade } from '../../utils/KelvinToCentigrade'
import { urlIconsWeather } from '../../utils/urlIconWeather'

import testIcon from '../../assets/icons/marker.png'
import '../../styles/components/ForecastItem.scss'

export const ForecastItem = (props) => {

   const {
      index,
      temp,
      weather
   } = props

   console.log(weather)
   console.log(temp)

   const centigradeMax = KelvinToCentigrade(temp?.max)
   const centigradeMin = KelvinToCentigrade(temp?.min)

   const weatherDate = new Date()
   const getDay = weatherDate.getDay()
   const week = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday']
   const nextDays = week.filter((item, i) => {
      const indexCurrentDay = week.indexOf(week[getDay])
      // La semana acaba en 7
      const resetDays = indexCurrentDay + 4 > 8 ? 0 : indexCurrentDay
      return i > indexCurrentDay && i < indexCurrentDay + 4
   })
   console.log(nextDays, 'filtrado')


   return(
      <div className='Forecast_item'>
         <div>
            <img src={testIcon} alt='Icon weather'/>
            <span>
               <p>Friday</p>
               <p>{weather?.main}</p>
            </span>
         </div>
         <div className={index === 0 ? 'Forecast_item__first-item' : 'Forecast_item__others-item'}>
            <p>{centigradeMax}<span>°c</span> / {centigradeMin}<span>°c</span></p>
         </div>
      </div>
   )
}