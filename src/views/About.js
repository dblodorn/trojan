import React from 'react'
import { Head, apiData, FullWindow } from './../components'
import { StyledMarkup } from './../styles/components'
import {  } from './../styles/mixins'
import {  } from './../styles/theme'

export default apiData(props =>
  <React.Fragment>
    <Head title={`About`} />
    <StyledMarkup dangerouslySetInnerHTML={{ __html: props.options.about_page_copy }}/>
    <FullWindow zindex={0}></FullWindow>
  </React.Fragment>
)