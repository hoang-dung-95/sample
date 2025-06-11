import React from 'react';
import SafeAreaView from './components/SafeAreaView';
import FormContainer, {FormContainerInner} from './components/FormContainer';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ControlledFormTextInput} from './components/TextInput/ControlledFormTextInput';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const validationSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email().required(),
  username: yup.string(),
});

const App = () => {
  const {
    control,
    handleSubmit,
    setFocus,
    // getValues,
    // watch,
    // formState: {isValid, dirtyFields},
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: unknown) => {
    // const {name, email, username} = data;
    console.log(data);
  };

  return (
    <SafeAreaView>
      <FormContainer>
        <FormContainerInner>
          <View style={styles.inputs}>
            <ControlledFormTextInput
              name="name"
              control={control}
              testID="register-view-name"
              textContentType="name"
              autoComplete="name"
              returnKeyType="next"
              required
              label={'Full_name'}
              onSubmitEditing={() => setFocus('name')}
              containerStyle={styles.inputContainer}
            />
            <ControlledFormTextInput
              name="username"
              control={control}
              testID="register-view-username"
              textContentType="username"
              autoComplete="username"
              returnKeyType="next"
              required
              label={'Username'}
              onSubmitEditing={() => setFocus('username')}
              containerStyle={styles.inputContainer}
            />
            <ControlledFormTextInput
              name="email"
              control={control}
              testID="register-view-email"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoComplete="email"
              returnKeyType="next"
              required
              label={'Email'}
              onSubmitEditing={() => setFocus('email')}
              containerStyle={styles.inputContainer}
            />
          </View>
          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.registerButton}>
            <Text>Register</Text>
          </TouchableOpacity>
        </FormContainerInner>
      </FormContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  inputs: {
    gap: 12,
    paddingTop: 24,
    paddingBottom: 12,
  },
  inputContainer: {
    marginTop: 0,
    marginBottom: 0,
  },
  registerButton: {
    marginTop: 36,
    marginBottom: 32,
  },
});
