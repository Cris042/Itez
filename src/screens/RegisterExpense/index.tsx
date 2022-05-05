import React, { useRef, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { Menu, MenuTypeProps } from '../../components/Menu';
import { Button } from '../../components/Button';

import { Container, Title, Input, Form,Text} from './styles';
import api from "../../services/axios";

export  default function RegisterExpense() 
{
  const navigation = useNavigation();
  const [ name, setName ] = useState('');
  const [ valueTransactions, setValue ] = useState( "0" );
  const [ typeTransactions, setTypeTransactions ] = useState<MenuTypeProps>("gastos");


  async function handleSave()
  {
     alert( typeTransactions )
  }

  
  return (
    <Container>
      <Title>Cadastro Gastos</Title>

      <Menu
        type={ typeTransactions }
        setType={ setTypeTransactions }
      />
      
      <Form>
        <Input
          placeholder="Nome..."
          onChangeText={ setName }
          value={ name }
        />

        <Input
          placeholder="Valor..."
          keyboardType="numeric"
          onChangeText={ setValue }
          value={ valueTransactions }
        />

        <Button
          title="Enviar"
          onPress={ handleSave }
        />
      </Form>
      <Text onPress={() => { navigation.navigate("Home") }} > Volta Para Pagina Inicial </Text>
    </Container>
  );
}