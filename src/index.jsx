import React from 'react'
import ReactDOM from 'react-dom'

import './styles/utils/Reset.scss'
import './styles/utils/Global.scss'
import './styles/utils/Variable.css'

import { App } from './pages/App'

ReactDOM.render(
   <App />,
   document.getElementById('app')
)