import React from 'react'

import { GetDataContainer } from '../../containers/GetDataContainer'
import { Loader } from '../Loader/Loader'

import { KelvinToCentigrade } from '../../utils/KelvinToCentigrade'
import { meterSecToKilometerHour } from '../../utils/meterSecToKilometerHour'
import { urlIconWeather } from '../../utils/urlIconWeather'

import '../../styles/components/OthersLocationsItem.scss'

const renderProp = ({ loading, error, data }) => {

   const {
      main = { temp: 0, humidity: 0 },
      name,
      weather = [{ icon: '' }],
      wind = { speed: 0 }
   } = data

   if (loading) return <Loader
                           height={'15px'}
                           width={'35px'}
                           heightChild={'10px'}
                           widthChild={'10px'}
                        />
   if(error) return <p>¡Se rompio :O!</p>

   return(
      <div className='OthersLocationsItem'>
         <div>
            <span>
               <img src={weather[0].icon ? urlIconWeather(weather[0].icon) : '' } alt='Weather icon' />
            </span>
            <p>{KelvinToCentigrade(main.temp)}<span>°c</span></p>
            <span>
               <p>{name}</p>
               <p>Francia</p>
            </span>
         </div>
         <div>
            <p>Humidity: {main.humidity}%</p>
            <p>Wind</p>
            <p>{meterSecToKilometerHour(wind.speed)} km/h</p>
         </div>
      </div>
   )
}

export const OthersLocationsItem = (props) => {

   const {
      api
   } = props

   return(
      <GetDataContainer api={api} >
            {renderProp}
      </GetDataContainer>
   )
}