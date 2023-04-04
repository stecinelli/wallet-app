import style from 'styled-components/native';
import { colors } from './colors';
import { Dimensions } from 'react-native';

export const Container = style.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.white};
`;

export const ScreenWidth = Dimensions.get('screen').width;
export const ScreenHeight = Dimensions.get('screen').height;
