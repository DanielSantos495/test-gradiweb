import React from 'react'

import '../../styles/components/SectionItem.scss'

export const SectionItem = (props) => {

   const {
      children,
      titleBold,
      titleLight
   } = props

   return(
      <section className='SectionItem'>
         <h2><span>{titleBold}</span> {titleLight}</h2>
         {children}
      </section>
   )
}