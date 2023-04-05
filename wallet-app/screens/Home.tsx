import React, { FunctionComponent } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

// images
import logo1 from '../assets/cards/mc.png';
import logo2 from '../assets/cards/visa_white.png';
import portrat1 from '../assets/portraits/1.jpg';
import portrat2 from '../assets/portraits/2.jpg';
import portrat3 from '../assets/portraits/3.jpg';

// custom components
import { Container } from '../components/shared';
import { colors } from '../components/colors';
import CardSection from '../components/Cards/CardSection';
import TransactionSection from '../components/Transactions/TransactionSection';
import SendMoneySection from '../components/SendMoney/SendMoneySection';

const HomeContainer = styled(Container)`  
  background-color: ${colors.graylight};
  width: 100%;
  height: 100%;
  flex: 1;
`;

// types
import { RootStackParamList } from '../navigators/RootStack';
import { StackScreenProps } from '@react-navigation/stack';
export type Props = StackScreenProps<RootStackParamList, 'Home'>;

const Home: FunctionComponent<Props> = () => {
  const cardsData = [
    {
      id: 1,
      accountNo: '1234567890',
      balance: 1000.40,
      alias: 'Work Debit',
      logo: logo1,
    },
    {
      id: 2,
      accountNo: '1234560000',
      balance: 2000.90,
      alias: 'Special Credit',
      logo: logo2,
    },
    {
      id: 3,
      accountNo: '1234007901',
      balance: 2000.50,
      alias: 'Travel Card',
      logo: logo1,
    },
  ];

  const transactionData = [
    {
      id: 4,
      title: 'Taxi',
      subTitle: 'Uber Car',
      amount: '-$86.00',
      date: '14 Feb 2023',
      art: {
        icon: 'car',
        background: `${colors.primary}`,
      },
    },
    {
      id: 5,
      title: 'Shopping',
      subTitle: 'Ali express',
      amount: '-$290.00',
      date: '20 Feb 2023',
      art: {
        icon: 'cart',
        background: `${colors.tertiary}`,
      },
    },   {
      id: 6,
      title: 'Travel',
      subTitle: 'Emirates',
      amount: '-$586.00',
      date: '21 Feb 2023',
      art: {
        icon: 'airplane',
        background: `${colors.accent}`,
      },
    },
  ];

  const sendMoneyData = [
    {
      id: 7,
      name: 'John Andoh',
      amount: 1000.40,
      background: `${colors.primary}`,
      img: portrat1,
    },
    {
      id: 8,
      name: 'Harleen Scot',
      amount: 4400.70,
      background: `${colors.primary}`,
      img: portrat2,
    },
    {
      id: 9,
      name: 'James Corbyn',
      amount: 6200.50,
      background: `${colors.primary}`,
      img: portrat3,
    },
  ]

  return (
    <HomeContainer>
      <StatusBar style="auto" />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  )
}

export default Home