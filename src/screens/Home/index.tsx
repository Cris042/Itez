import React, { useRef, useState, useEffect } from 'react';
import { FlatList, Alert } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import { Menu, MenuTypeProps } from '../../components/Menu';
import { Transactions } from '../../components/Transactions';
import { Button } from '../../components/Button';

import { Container, Title, Input, Form, FormTitle } from './styles';

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
  const [ name, setName ] = useState('');
  const [ valueTransactions, setValue ] = useState( "0" );
  const [ category, setCategory ] = useState('c1');
  const [ typeTransactions, setTypeTransactions ] = useState<MenuTypeProps>("gastos");

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

  async function handleEdit()   
  {
   
  }

  async function handleRemove() 
  {
   
  }

  async function handleSave()
  {
     alert( typeTransactions )
  }

  
  return (
    <Container>
      <Title>Gerenciar</Title>

      <Menu
        type={ typeTransactions }
        setType={ setTypeTransactions }
      />
      
      <Form>
        <FormTitle>
          Skill
        </FormTitle>

        <Input
          placeholder="Nome..."
          onChangeText={ setName }
          value={ name }
        />

        <Input
          placeholder="Valor"
          keyboardType="numeric"
          onChangeText={ setValue }
          value={ valueTransactions }
        />

        <Button
          title="Enviar"
          onPress={ handleSave }
        />
      </Form>

      <FlatList
        data={ transactions }
        keyExtractor={ item => item.id }
        renderItem={({ item }) => (
          <Transactions
            data={ item }
            onEdit={() => handleEdit()}
            onRemove={() => handleRemove()}
          />
        )}
      /> 

     
    </Container>
  );
}