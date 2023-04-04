import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

//colors
import { colors } from '../colors';

//types
import { TextProps } from './types';

const StylesText = styled.Text`
  font-size: 15px;
  color: ${colors.white};
  text-align: left;
  font-family: 'Lato-Bold';
`

const RegularText: FunctionComponent<TextProps> = (props) => {
  return (
    <StylesText style={props.textStyles}>{props.children}</StylesText>
  )
}

export default RegularText