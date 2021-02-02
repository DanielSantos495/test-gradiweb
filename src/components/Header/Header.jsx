import React from 'react'

import { BannerHeader } from './BannerHeader'

import BogotaImage from '../../assets/images/bogota.jpg'
import '../../styles/components/Header.scss'

export const Header = () => {

   return(
      <header className='Header'>
         <div>
            <img src={BogotaImage} alt='Bogota image'/>
            <span>
               <img src='' alt='Icon mark' />
               <p>Bogotá</p>
            </span>
         </div>
         <BannerHeader />
      </header>
   )
}