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
  margin: 34px 0 140px 0;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 56px;
  border: 1px solid #131016;
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 5px;
  background: #FFF;
`;

export const Form = styled.View`
  padding: 24px;
`;

export const FormTitle = styled.Text`
  font-size: 24px;
  color: #131016;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #FFF;
  text-align:left;
  font-weight: bold;
  margin: 18px 0 90px 25px;
`;
