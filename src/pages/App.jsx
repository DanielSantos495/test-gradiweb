import React, { useState, useEffect } from 'react'

import { Header } from '../components/Header/Header'
import { Forecast } from '../components/Forecast/Forecast'
import { PlaceVisit } from '../components/PlaceVisit/PlaceVisit'
import { Suggestion } from '../components/Suggestion/Suggestion'
import { OthersLocations } from '../components/OthersLocations/OthersLocations'
import { Loader } from '../components/Loader/Loader'

import '../styles/pages/App.scss'

export const App = () => {

   const [loading, setLoading] = useState(true)

   useEffect(() => {
      setLoading(false)
   }, [])


   if (loading) return <div className='Loader__container'>
      <Loader
         height={'80px'}
         width={'80px'}
         heightChild={'25px'}
         widthChild={'25px'}
      />
   </div>

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