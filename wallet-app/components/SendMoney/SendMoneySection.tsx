import React, { FunctionComponent, useRef } from 'react';
import styled from 'styled-components/native';
import BottomSheet from 'reanimated-bottom-sheet';

// custom components
import { colors } from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import SendMoneyItem from './SendMoneyItem';

const SendMoneySectionBackground = styled.View`
  width: 100%;
  padding-top: 15px;
  background-color: ${colors.white};
`;

const SendMoneyRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-horizontal: 25px;
`;

const SendMoneyList = styled.FlatList`
  width: 100%;
  flex: auto;
  min-height: 80%;
  padding-horizontal: 25px;
`;

const TextButton = styled.TouchableOpacity``;

// types
import { SendMoneySectionProps } from './types';


const SendMoneySection: FunctionComponent<SendMoneySectionProps> = (props) => {

  const sheetRef = useRef<BottomSheet>(null)

  const renderContent = () => {
    return (
      <SendMoneySectionBackground>
        <SendMoneyRow style={{ marginBottom: 25 }}>
          <RegularText textStyles={{ fontSize: 19, color: colors.secondary}}>
            Send money to
          </RegularText>
          <TextButton onPress={() => alert('Add')}>
            <SmallText textStyles={{ color: colors.tertiary, fontWeight: 'bold' }}>
              +Add
            </SmallText>
          </TextButton>
        </SendMoneyRow>
        <SendMoneyList
          data={props.data}
          contentContainerStyle={{ 
            alignItems: 'flex-start',
          }}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          keyExtractor={({id}: any) => id.toString()}
          renderItem={({item}: any) => <SendMoneyItem {...item} /> }
        />
      </SendMoneySectionBackground>
    )
  }


  return (
    <BottomSheet 
      ref={sheetRef}
      snapPoints={[380, 200, 0]}
      borderRadius={25}
      initialSnap={1}
      enabledContentTapInteraction={false}
      renderContent={renderContent}
    />
  )
}

export default SendMoneySection