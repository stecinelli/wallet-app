import React, { FunctionComponent } from 'react'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'

// images
import logo1 from '../assets/cards/mc.png'
import logo2 from '../assets/cards/visa_white.png'
import portrat1 from '../assets/portrat/1.png'
import portrat2 from '../assets/portrat/2.png'
import portrat3 from '../assets/portrat/3.png'

// custom components
import { Container } from '../components/shared'
import { colors } from '../components/colors';
import CardSection from '../components/Cards/CardSection'
import TransactionSection from '../components/Transactions/TransactionSection'
import SendMoneySection from '../components/SendMoney/SendMoneySection'

const HomeContainer = styled(Container)`
  flex: 1;
  background-color: ${colors.graylight};
  width: 100%;
`;

const Home: FunctionComponent = () => {
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
      alias: 'Work Debit',
      logo: logo2,
    },
    {
      id: 3,
      accountNo: '1234007901',
      balance: 2000.50,
      alias: 'Work Debit',
      logo: logo1,
    },
  ];

  const transactionData = [
    {
      id: 1,
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
      id: 2,
      title: 'Shopping',
      subTitle: 'Ali express',
      amount: '-$290.00',
      date: '20 Feb 2023',
      art: {
        icon: 'cart',
        background: `${colors.tertiary}`,
      },
    },   {
      id: 1,
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
      id: 1,
      name: 'John Andoh',
      amount: 1000.40,
      background: `${colors.primary}`,
      img: portrat1,
    },
    {
      id: 2,
      name: 'Harleen Scot',
      amount: 4400.70,
      background: `${colors.primary}`,
      img: portrat2,
    },
    {
      id: 3,
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