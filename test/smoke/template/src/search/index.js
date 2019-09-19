'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import x from './x.jpg'
import './search.less'
import { commonFn } from '../../common'

class Search extends React.Component {
    render() {
        return <div className={'searchBox'}>{commonFn()}search component 6666 <img src={x}/></div>
    }
}

ReactDOM.render(
    <Search/>,
    document.getElementById('root')
)