import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { Button } from '../../components/Button';

import { Container, Title, Input, Form, Text } from './styles';
import api from "../../services/axios";


export  default function RegistrationRecipes() 
{
  const navigation = useNavigation();
  const [ name, setName ] = useState('');
  const [ valueTransactions, setValue ] = useState( "0" );
 
  async function handleSave()
  {
     alert(  )
  }

  
  return (
    <Container>
      <Title>Cadastro Receitas</Title>    
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
      <Text onPress={() => { navigation.navigate("Home") }} > Volta Para Pagina Inicial</Text>
    </Container>
  );
}