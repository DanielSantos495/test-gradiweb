import React from 'react'

import { GetDataContainer } from '../../containers/GetDataContainer'
import { Loader } from '../Loader/Loader'

import { KelvinToCentigrade } from '../../utils/KelvinToCentigrade'
import { urlIconWeather } from '../../utils/urlIconWeather'
import config from '../../../config'

import '../../styles/components/BannerHeader.scss'

const renderProp = ({ loading, error, data }) => {

   const { main, weather = [{ icon: '' }] } = data
   const centigrade = KelvinToCentigrade(main?.temp)

   if(loading) return <Loader
                        height={'15px'}
                        width={'35px'}
                        heightChild={'10px'}
                        widthChild={'10px'}
                     />
   if(error) return <p>¡Se rompio :O!</p>

   return (
      <div className='BannerHeader'>
         <div className='BannerHeader__weather'>
            <img src={weather[0].icon ? urlIconWeather(weather[0].icon) : '' } alt='Icon weather' />
            <p>Cloudy</p>
         </div>
         <div className='BannerHeader__degrees'>
            <p>{centigrade}</p>
            <span>°c</span>
         </div>
      </div>
   )
}

export const BannerHeader = () => {

   const API = `https://api.openweathermap.org/data/2.5/weather?q=bogota&appid=${config.key}`

   return(
      <GetDataContainer api={API}>
         {renderProp}
      </GetDataContainer>
   )
}