import React,{ useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, Title, Input, Form, FormTitle, Text } from './styles';
import api from "../../services/axios";

import { Button } from '../../components/Button';

export default function Login() 
{

  const navigation = useNavigation();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  

  async function handleSave()
  { 
     const dataKey = '@app:User';
     AsyncStorage.removeItem( dataKey );

     const data = new FormData();

     data.append("email", email);
     data.append("password", password);

     const response = await api.post("/authenticate/sessions/", { data } );

      if( response.data.token )
      {
          const obj = 
          {
            id: response.data.user.id,
            name: response.data.user.name,
            token: response.data.token,
          }

          const data = await AsyncStorage.getItem( dataKey );

          const dataFormatted = [       
            obj
          ];
          
          await AsyncStorage.setItem( dataKey, JSON.stringify( dataFormatted ) );           
          navigation.navigate("Home");
      }
      else
         alert("Usuario não encontrado");
  }

  
  return (
    <Container>
      <Title>Logar</Title>    
        <Form>
            <Input
                placeholder="Email..."
                onChangeText={ setEmail }
                value={ email }
            />

            <Input
                placeholder="Senha..."
                onChangeText={ setPassword }
                secureTextEntry={ true }
                value={ password }
            />

            <Button
                title="Enviar"
                onPress={ handleSave }
            />
        </Form>
      <Text onPress={() => { navigation.navigate("Register") }} > Nao tem cadastro ? Cadastre-se </Text>      
    </Container>
  );
};
