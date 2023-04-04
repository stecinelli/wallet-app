import React, { FunctionComponent} from 'react'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'

//Image
import background from '../assets/bgs/background_v1.png'

// Custom Components
import { colors } from '../components/colors'
import { Container } from '../components/shared'

const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.View`
  width: 100%;
  height: 55%;
  flex: 1;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;

const BottomSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1;
`;

const Welcome: FunctionComponent = () => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background}/>
        </TopSection>
        <BottomSection></BottomSection>
      </WelcomeContainer>
    </>
  )
}

export default Welcome