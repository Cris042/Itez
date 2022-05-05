import React from 'react';
import { MenuItem } from '../MenuItem';

import { Container } from './styles';

export type MenuTypeProps = 'gastos' | 'receitas';

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
        isActive={type === "gastos"}
        onPress={() => setType("gastos")}
      />

      <MenuItem
        title="Receitas"
        isActive={type === "receitas"}
        onPress={() => setType("receitas")}
      />
    </Container>
  );
}