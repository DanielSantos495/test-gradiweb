import React from 'react'
import PropTypes from 'prop-types'

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

SectionItem.propTypes = {
   children: PropTypes.node.isRequired,
   titleBold: PropTypes.string.isRequired,
   titleLight: PropTypes.string.isRequired
}