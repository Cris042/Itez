import React,{ useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { Container, Title, Input, Form, Text } from './styles';
import { Button } from '../../components/Button';
import api from "../../services/axios";

export default function Register() 
{

  const navigation = useNavigation();
  const [ email, setEmail ] = useState("");
  const [ name, setName ] = useState("");
  const [ password, setPassword ] = useState("");
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


  async function handleSave()
  {  
     let response = "";
     const data = new FormData();

     data.append("email", email);
     data.append("name", name);
     data.append("password", password);

     if( reg.test( email ) != true )
      alert("Email invalido");
     else
       response = await api.post("/users/" , { data } );
      
  }

  
  return (
    <Container>
      <Title>Cadastra-se</Title>    
        <Form>
            <Input
                placeholder="Email..."
                onChangeText={ setEmail }
                value={ email }
            />

            <Input
                placeholder="Nome..."
                onChangeText={ setName }
                value={ name }
            />

            <Input
                placeholder="Senha..."
                onChangeText={ setPassword }
                secureTextEntry={ true }
                value={ password }
            />

            <Button
                title="Salvar"
                onPress={ handleSave }
            />
        </Form>
      <Text onPress={() => { navigation.navigate("Login") }} > Voltar para o Login ? </Text>
    </Container>
  );
};
