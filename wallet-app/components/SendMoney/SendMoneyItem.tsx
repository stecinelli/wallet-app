import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

// components
import { ScreenWidth } from '../shared';
import { colors } from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import Profile from '../Header/Profile';

const SendMoneyItemContainer = styled.TouchableHighlight`
  height: 130px;
  width: ${ScreenWidth * 0.27}px;
  padding: 25px;
  border-radius: 10px;
  justify-content: space-between;
  margin: 0px 10px 10px 0px;
`;


//types
import { SendMoneyProps } from './types';

const SendMoneyItem: FunctionComponent<SendMoneyProps> = (props) => {
  return (
    <SendMoneyItemContainer 
      underlayColor={colors.secondary}
      style={{ backgroundColor: props.background }}
      onPress={() => alert('Send money to ' + props.name)}
    >
      <>
        <Profile img={props.img} imagContainerStyle={{ marginBottom: 10}}/>
        <SmallText textStyles={{ 
          color: colors.white, 
          fontSize: 12, 
          textAlign: 'left' 
        }}>
          {props.name}
        </SmallText>
        <RegularText textStyles={{
          color: colors.white,
          textAlign: 'left',
          fontSize: 13,
        }}>
          {props.amount}
        </RegularText>
      </>

    </SendMoneyItemContainer>
  )
}

export default SendMoneyItem