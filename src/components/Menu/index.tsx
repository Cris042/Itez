import { ScrollView } from 'react-native';
import React from 'react';
import { MenuItem } from '../MenuItem';

import { Container } from './styles';

export type MenuTypeProps = 'Entretenimento' | 'Alimentação' | 'Educação' | 'Saúde' | 'Transporte' | 'Receita';

type Props = 
{
  type: string;
  setType: ( value: MenuTypeProps ) => void;
}

export function Menu({ type, setType }: Props) 
{
  return (
    <Container>
      <ScrollView>
        <MenuItem
          title="Entretenimento"
          isActive={type === "Entretenimento"}
          onPress={() => setType("Entretenimento")}
        />

        <MenuItem
          title="Alimentação"
          isActive={type === "Alimentação"}
          onPress={() => setType("Alimentação")}
        />

        <MenuItem
          title="Educação"
          isActive={type === "Educação"}
          onPress={() => setType("Educação")}
        />

        <MenuItem
          title="Saúde"
          isActive={type === "Saúde"}
          onPress={() => setType("Saúde")}
        />

        <MenuItem
          title="Transporte"
          isActive={type === "Transporte"}
          onPress={() => setType("Transporte")}
        />
      </ScrollView>
    </Container>
  );
}