import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { GetData } from '../utils/GetData'

export const GetDataContainer = (props) => {

   const {
      children,
      api
   } = props

   const [data, setData] = useState({})
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(false)

   useEffect(() => {

      const getData = async () => {
         setLoading(true)
         try {
            const response = await GetData(api)
            setData(response)
            setLoading(false)
         } catch(err) {
            setError(true)
         }
      }
      getData()
   }, [])

   return(
      <>
         {children({loading, error, data})}
      </>
   )
}

GetDataContainer.propTypes = {
   children: PropTypes.func.isRequired,
   api: PropTypes.string.isRequired
}