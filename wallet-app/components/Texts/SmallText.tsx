import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

//colors
import { colors } from '../colors';

//types
import { TextProps } from './types';

const StylesText = styled.Text`
  font-size: 13px;
  color: ${colors.gray};
  text-align: left;
  font-family: 'Lato-Regular';
`

const SmallText: FunctionComponent<TextProps> = (props) => {
  return (
    <StylesText style={props.textStyles}>{props.children}</StylesText>
  )
}

export default SmallText