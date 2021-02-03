import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/components/Loader.scss'

export const Loader = (props) => {

   const {
      height,
      width,
      heightChild,
      widthChild
   } = props

   return(
      <div className='Loader' style={{ height, width }}>
         <div style={{ height: heightChild, width: widthChild }} />
         <div style={{ height: heightChild, width: widthChild }} />
         <div style={{ height: heightChild, width: widthChild }} />
      </div>
   )
}

Loader.propTypes = {
   height: PropTypes.string.isRequired,
   width: PropTypes.string.isRequired,
   heightChild: PropTypes.string.isRequired,
   widthChild: PropTypes.string.isRequired
}

