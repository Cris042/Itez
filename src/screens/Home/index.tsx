import React, { useRef, useState, useEffect } from 'react';
import { FlatList, Alert } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import { Menu, MenuTypeProps } from '../../components/Menu';
import { Transactions } from '../../components/Transactions';
import { Button } from '../../components/Button';

import { Container, Title, Input, Form, FormTitle } from './styles';

interface Transactions
{
    id: string;
    name: string;
    value: number;
    type: string;
}

export  default function Home() {
  const [ name, setName ] = useState('');
  const [ valueTransactions, setValue ] = useState( 0 );
  const [ category, setCategory ] = useState('c1');
  const [ type, setType ] = useState<MenuTypeProps>("Gastos");

  const [ transactions, setTransactions ] = useState<Transactions[]>([]);
  const bottomSheetRef = useRef<BottomSheet>(null);

  // let obj = {
  //   id: "1",
  //   name: name,
  //   type: String( type ),
  // }

  // setSkills( [obj] )

  async function handleEdit() 
  {
   
  }

  async function handleRemove() 
  {
   
  }

  async function handleSave()
  {
     alert( type )
  }

  
  return (
    <Container>
      <Title>Gerenciar</Title>
      
      <Menu
        type={ type }
        setType={ setType }
      />
      
      <Form>
        <FormTitle>
          Skill
        </FormTitle>

        <Input
          placeholder="Nome."
          onChangeText={ setName }
          value={ name }
        />

        <Input
          placeholder="Valor"
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