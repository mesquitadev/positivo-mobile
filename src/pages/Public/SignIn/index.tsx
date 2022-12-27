import { Button, InputForm } from '@components/index';
import { yupResolver } from '@hookform/resolvers/yup';
import { useStatusBar } from '@hooks/StatusBar';
import { useAuth } from '@hooks/auth';
import { useDropDown } from '@hooks/dropdown';
import { useLoading } from '@hooks/useLoading';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '@routes/PublicRoutes';
import theme from '@theme/index';
import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import {
  Container,
  CreateAccountButton,
  CreateAccountButtonBoldText,
  CreateAccountButtonText,
  Fields,
  Form,
  Header,
  Logo,
} from './styles';

type signInScreenProp = NativeStackNavigationProp<StackParamList, 'SignIn'>;

type FormData = {
  email: string;
  password: string;
};

const schema = Yup.object().shape({
  email: Yup.string().required('O usuário é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  useStatusBar('light-content', theme.colors.primary);
  const { ref } = useDropDown();
  const passwordRef = useRef(null);
  const navigation = useNavigation<signInScreenProp>();
  const { signIn } = useAuth();
  const { loading } = useLoading();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    reValidateMode: 'onSubmit',
  });

  async function handleLogin(data: FormData) {
    try {
      await signIn({
        email: data.email,
        password: data.password,
      });
      reset();
    } catch (err) {
      ref.current.alertWithType(
        'error',
        'Erro!',
        'Por favor, Verifique as credenciais informadas e tente novamente.'
      );
    }
  }

  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <Form>
        <Fields>
          <InputForm
            name="email"
            control={control}
            placeholder="usuario"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordRef.current?.focus();
            }}
            error={errors.email && errors.email.message}
          />

          <InputForm
            ref={passwordRef}
            name="password"
            control={control}
            secureTextEntry
            textContentType="password"
            placeholder="senha"
            autoCapitalize="none"
            returnKeyLabel="Entrar"
            returnKeyType="send"
            // onSubmitEditing={handleSubmit(handleLogin)}
            error={errors.password && errors.password.message}
          />

          <Button loading={loading} title="Entrar" onPress={handleSubmit(handleLogin)} />
        </Fields>
      </Form>
      <CreateAccountButton onPress={() => console.log('oka')}>
        <CreateAccountButtonText>
          Não tem uma conta? <CreateAccountButtonBoldText>Cadastre-se</CreateAccountButtonBoldText>
        </CreateAccountButtonText>
      </CreateAccountButton>
    </Container>
  );
}
