import React from 'react'

import { Header } from '../components/Header/Header'
import { Forecast } from '../components/Forecast/Forecast'
import { PlaceVisit } from '../components/PlaceVisit/PlaceVisit'
import { Suggestion } from '../components/Suggestion/Suggestion'
import { OthersLocations } from '../components/OthersLocations/OthersLocations'

import '../styles/pages/App.scss'

export const App = () => {

   return(
      <>
         <Header />
         <main className='Main'>
            <Forecast />
            <PlaceVisit />
            <Suggestion />
            <OthersLocations />
         </main>
      </>
   )
}