import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { KelvinToCentigrade } from '../../utils/KelvinToCentigrade'
import { urlIconWeather } from '../../utils/urlIconWeather'

import '../../styles/components/ForecastItem.scss'

export const ForecastItem = (props) => {

   const {
      index,
      temp,
      weather = [{main: '', icon: ''}]
   } = props

   const [weekOfThreeDays, setWeekOfThreeDays] = useState([])
   const centigradeMax = KelvinToCentigrade(temp?.max)
   const centigradeMin = KelvinToCentigrade(temp?.min)

   const getDayLiteral = () => {

      const weatherDate = new Date()
      const getDay = weatherDate.getDay()
      const week = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday']

      return week[getDay]
   }

   const nextThreeDays = currentDay => {

      let threeDays = ['Sunday', 'Monday', 'Tuesday']

      switch(currentDay) {
         case 'Sunday': threeDays = ['Monday', 'Tuesday', 'Wednessday']
            break
         case 'Monday': threeDays = ['Tuesday', 'Wednessday', 'Thursday']
            break
         case 'Tuesday': threeDays = ['Wednessday', 'Thursday', 'Friday']
            break
         case 'Wednessday': threeDays = ['Thursday', 'Friday', 'Saturday']
            break
         case 'Thursday': threeDays = ['Friday', 'Saturday', 'Sunday']
            break
         case 'Friday': threeDays = ['Saturday', 'Sunday', 'Monday']
            break
         case 'Saturday': threeDays = ['Sunday', 'Monday', 'Tuesday']
            break
         default: threeDays = ['What day is today?']
      }

      setWeekOfThreeDays(threeDays)
   }
   useEffect(() => {
      nextThreeDays(getDayLiteral())
   }, [])

   return(
      <div className='Forecast_item'>
         <div>
            <img src={weather[0].icon ? urlIconWeather(weather[0].icon) : '' } alt='Icon weather'/>
            <span>
               <p>{weekOfThreeDays[index]}</p>
               <p>{weather[0].main}</p>
            </span>
         </div>
         <div className={index === 0 ? 'Forecast_item__first-item' : 'Forecast_item__others-item'}>
            <p>{centigradeMax}<span>°c</span> / {centigradeMin}<span>°c</span></p>
         </div>
      </div>
   )
}

ForecastItem.propTypes = {
   index: PropTypes.number.isRequired
}