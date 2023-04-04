import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

//custom components
import { colors } from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';


const AmountSectionBackground = styled.View`
  width: 100%;
  padding-items: center;
  flex: 1;
`;

//types
import { AmountProps } from './types'
import { color } from 'react-native-reanimated';

const AmountSection: FunctionComponent<AmountProps> = (props) => {
  return (
    <AmountSectionBackground>
      <SmallText textStyles={{ color: colors.secondary, marginBottom: 15}}>
        Total Balance
      </SmallText>
      <RegularText textStyles={{ color: colors.secondary, fontSize: 28 }}>
        {props.balance}
      </RegularText>
    </AmountSectionBackground>
  )
}

export default AmountSection