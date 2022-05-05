import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: #131016;
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #FFF;
  text-align:center;
  font-weight: bold;
  margin: 34px 0 80px 0;
`;

export const Text = styled.Text`
  font-size: 24px;
  color: #25C5F0;
  text-align:center;
  font-weight: bold;
  margin: 14px 0 30px 0;
`;

