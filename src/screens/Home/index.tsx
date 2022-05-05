import React, { useRef, useState, useEffect } from 'react';
import { FlatList, Alert } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { useNavigation } from "@react-navigation/native";

import { Transactions } from '../../components/Transactions';

import { Container, Title, Text } from './styles';
import api from "../../services/axios";

interface TransactionsObj
{
    id: string;
    name: string;
    idUser: string;
    type: string;
    value: string;
}

export  default function Home() 
{
  const navigation = useNavigation();
  const [ transactions, setTransactions ] = useState<TransactionsObj[]>([]);
  const bottomSheetRef = useRef<BottomSheet>(null);

  useEffect(() => 
  {

    async function load() 
    {
      const response = await api.get("/transactions/list");
      setTransactions( response.data );
    }

    load();

  },[ transactions ]);

  async function handleEdit( response: TransactionsObj )   
  {
      console.log( response )
  }

  async function handleRemove( response: String ) 
  {
     console.log( response )
  }
  
  return (
    <Container>
      <Title>Gerenciar</Title>

      <FlatList
        data={ transactions }
        keyExtractor={ item => item.id }
        renderItem={({ item }) => (
          <Transactions
            data={ item }
            onEdit={() => handleEdit( item )}
            onRemove={() => handleRemove( item.id )}
          />
        )}
      /> 

      <Text onPress={() => { navigation.navigate("RegisterRecipes") }} > Cadastrar Nova Receita </Text>
      <Text onPress={() => { navigation.navigate("RegisterExpense") }} > Cadastrar Novo Gasto </Text>
    </Container>
  );
}