import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native'

//colors
import { colors } from '../colors'

const StylesText = styled.Text`
  font-size: 13px;
  color: ${colors.gray};
  text-align: left;
  font-family: 'Lato-Regular';
`

const SmallText = () => {
  return (
    <div>SmallText</div>
  )
}

export default SmallText