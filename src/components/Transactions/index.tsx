import React from 'react';
import { Entypo } from '@expo/vector-icons';

import { Container, Icon, Name, Options, Option } from './styles';

export type TransactionsProps = 
{
    id: string;
    name: string;
    idUser: string;
    type: string;
    value: string;
}

type Props = 
{
  data: TransactionsProps;
  onRemove: () => void;
  onEdit: () => void;
}

export function Transactions({ data, onRemove, onEdit }: Props) 
{
  return (
    <Container>
      <Icon type={data.type}>
        <Entypo
          name={data.type === "receitas" ? "credit" : "circle-with-plus" }
          color="#FFF"
          size={20}
        />
      </Icon>

      <Name>{ data.name }</Name>
      <Name>{ data.value } $</Name>

      <Options>

        <Option onPress={onEdit}>
          <Entypo
            name="edit"
            color="#FEDC43"
            size={20}
          />
        </Option>

        <Option onPress={onRemove}>
          <Entypo
            name="trash"
            color="#EE3B45"
            size={20}
          />
        </Option>

      </Options>
    </Container>
  );
}