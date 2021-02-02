import React from 'react'

import '../../styles/components/BannerHeader.scss'

export const BannerHeader = () => {

   return(
      <div className='BannerHeader'>
         <div className='BannerHeader__weather'>
            <img src='' alt='Icon weather' />
            <p>Cloudy</p>
         </div>
         <div className='BannerHeader__degrees'>
            <p>31</p>
            <span>°c</span>
         </div>
      </div>
   )
}