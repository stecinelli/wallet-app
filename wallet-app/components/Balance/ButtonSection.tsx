import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

//custom components
import { colors } from '../colors';
import RegularButton from '../Buttons/RegularButton';

const ButtonSectionBackground = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
`;

const ButtonSection: FunctionComponent = () => {
  return (
    <ButtonSectionBackground>
      <RegularButton btnStyles={{ width: '50%'}} onPress={()=> { alert('Cancel Card!') }} >
        Cancel   <Ionicons name="card" size={17} color={colors.white} />
      </RegularButton>
    </ButtonSectionBackground>
  )
}

export default ButtonSection