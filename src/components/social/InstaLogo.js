import React from 'react'
import { SocialLink } from './../../styles/components'
import { colors } from './../../styles/theme'

export default (props) =>
  <SocialLink href={props.link} target="_blank">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" width="48" height="48">
      <title>Instagram</title>
      <g fill={colors.yellow}>
        <path fill={colors.yellow} d="M24,4.324c6.408,0,7.167,0.024,9.698,0.14c2.731,0.125,5.266,0.672,7.216,2.622 c1.95,1.95,2.497,4.485,2.622,7.216c0.115,2.531,0.14,3.29,0.14,9.698s-0.024,7.167-0.14,9.698 c-0.125,2.731-0.672,5.266-2.622,7.216c-1.95,1.95-4.485,2.497-7.216,2.622c-2.53,0.115-3.289,0.14-9.698,0.14 s-7.168-0.024-9.698-0.14c-2.731-0.125-5.266-0.672-7.216-2.622c-1.95-1.95-2.497-4.485-2.622-7.216 c-0.115-2.531-0.14-3.29-0.14-9.698s0.024-7.167,0.14-9.698c0.125-2.731,0.672-5.266,2.622-7.216c1.95-1.95,4.485-2.497,7.216-2.622 C16.833,4.349,17.592,4.324,24,4.324 M24,0c-6.518,0-7.335,0.028-9.895,0.144c-3.9,0.178-7.326,1.133-10.077,3.884 c-2.75,2.75-3.706,6.175-3.884,10.077C0.028,16.665,0,17.482,0,24c0,6.518,0.028,7.335,0.144,9.895 c0.178,3.9,1.133,7.326,3.884,10.077c2.75,2.75,6.175,3.706,10.077,3.884C16.665,47.972,17.482,48,24,48s7.335-0.028,9.895-0.144 c3.899-0.178,7.326-1.133,10.077-3.884c2.75-2.75,3.706-6.175,3.884-10.077C47.972,31.335,48,30.518,48,24s-0.028-7.335-0.144-9.895 c-0.178-3.9-1.133-7.326-3.884-10.077c-2.75-2.75-6.175-3.706-10.077-3.884C31.335,0.028,30.518,0,24,0L24,0z"/> <path data-color="color-2" d="M24,11.676c-6.807,0-12.324,5.518-12.324,12.324S17.193,36.324,24,36.324 S36.324,30.807,36.324,24S30.807,11.676,24,11.676z M24,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S28.418,32,24,32z"/> <circle data-color="color-2" cx="36.811" cy="11.189" r="2.88"/>
      </g>
    </svg>
  </SocialLink>