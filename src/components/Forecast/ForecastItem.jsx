import React from 'react'

import testIcon from '../../assets/icons/marker.png'
import '../../styles/components/ForecastItem.scss'

export const ForecastItem = (props) => {

   const {
      index
   } = props

   return(
      <div className='Forecast_item'>
         <div>
            <img src={testIcon} alt='Icon weather'/>
            <span>
               <p>Friday</p>
               <p>Rain</p>
            </span>
         </div>
         <div className={index === 0 ? 'Forecast_item__first-item' : 'Forecast_item__others-item'}>
            <p>32<span>°c</span> / 23<span>°c</span></p>
         </div>
      </div>
   )
}