import React from 'react'
import { Head, apiData, FullWindow } from './../components'
import { } from './../styles/components'
import { } from './../styles/mixins'
import { } from './../styles/theme'

export default apiData(props =>
  <React.Fragment>
    <Head title={`Listen`} />
    <FullWindow zindex={0}></FullWindow>
  </React.Fragment>
)