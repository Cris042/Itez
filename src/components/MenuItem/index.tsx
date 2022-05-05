import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { Container, Title } from './styles';
import { icons } from 'react-icons';

type Props = TouchableOpacityProps & 
{
  title: string;
  isActive?: boolean;
}

export function MenuItem({ title, isActive = false, ...rest }: Props) 
{
  
  let icon;
  
  switch ( title ) 
  {
    case 'Entretenimento':
      icon = "light-down";
      break;
    case 'Alimentação':
      icon = "shopping-cart";
      break;
    case 'Educação':
      icon = "graduation-cap";
      break;
    case 'Saúde':
      icon = "heart";
      break;
    case 'Transporte':
      icon = "gauge";
      break;
    default:
      icon = "light-down";
      break; 
  }

  return (
    <Container
      isActive={isActive}
      {...rest}
    >
      <Entypo
        name=
        {
          title == "Entretenimento" ? "light-down" : title == "Alimentação" ? "shopping-cart" : 
          title == "Educação" ? "graduation-cap" :  title == "Transporte" ? "gauge" : "heart" 
        }
        color="#FFF"
        size={24}
      />

      <Title>{title}</Title>
    </Container>
  );
}