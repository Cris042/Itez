import React, { useRef, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Menu, MenuTypeProps } from '../../components/Menu';
import { Button } from '../../components/Button';

import { Container, Title, Input, Form,Text} from './styles';
import api from "../../services/axios";

interface DetailsRouteParams 
{
    id: string;
}

interface User
{
   id: string;
   name: string;
   token: string;
}


export  default function RegisterExpense() 
{
  const [ name, setName ] = useState('');
  const [ valueTransactions, setValue ] = useState( "" );

  const [ type, setTypeTransactions ] = useState<MenuTypeProps>("Entretenimento");
  const [ user, setUser ] = useState<User[]>([]);

  const route = useRoute();
  const navigation = useNavigation();
  const params = route.params as DetailsRouteParams;

  useEffect(() => 
  {
  
      async function load() 
      {
         const response = await AsyncStorage.getItem( '@app:User' );
  
         const responseFormatted = response ? JSON.parse( response ) : [];
         const expensives = responseFormatted;
    
         setUser( expensives );    
      }

      load();

  }, [  ]);

  async function handleSave()
  {
      const transactions = new FormData();

      transactions.append("name", name);
      transactions.append("type", type);
      transactions.append("id", user[0]?.id);
      transactions.append("value", valueTransactions);
 
      await api.post("/transactions/", { transactions } );
      navigation.navigate("Home");
  }

  return (
    <Container>
      <Title>Cadastro Gastos</Title>

      <Menu
        type={ type }
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