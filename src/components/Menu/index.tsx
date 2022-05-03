import React from 'react';
import { MenuItem } from '../MenuItem';

import { Container } from './styles';

export type MenuTypeProps = 'Gastos' | 'Receitas';

type Props = 
{
  type: string;
  setType: ( value: MenuTypeProps ) => void;
}

export function Menu({ type, setType }: Props) 
{
  return (
    <Container>
      <MenuItem
        title="Gastos"
        isActive={type === "Gastos"}
        onPress={() => setType("Gastos")}
      />

      <MenuItem
        title="Receitas"
        isActive={type === "Receitas"}
        onPress={() => setType("Receitas")}
      />
    </Container>
  );
}