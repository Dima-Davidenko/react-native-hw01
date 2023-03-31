import { useState } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authSlice';

const initialState = {
  name: '',
  password: '',
  email: '',
};

const RegistrationScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const { width } = useWindowDimensions();
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  const onRegistration = () => {
    dispatch(logIn());
    console.log('Credentials', `${state.name} +${state.email} + ${state.password}`);
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/photoBG.png')} style={styles.image}>
          <KeyboardAvoidingView
            style={styles.wrapper}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom: isShowKeyboard ? 32 : 113,
                width,
              }}
            >
              <Text style={styles.title}>Registration</Text>
              <TextInput
                value={state.name}
                onChangeText={value => setState(prevState => ({ ...prevState, name: value }))}
                placeholder="Name"
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
              />
              <TextInput
                value={state.email}
                onChangeText={value => setState(prevState => ({ ...prevState, email: value }))}
                placeholder="Email"
                secureTextEntry={true}
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
              />
              <TextInput
                value={state.password}
                onChangeText={value => setState(prevState => ({ ...prevState, password: value }))}
                placeholder="Password"
                secureTextEntry={true}
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
              />
              <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={onRegistration}>
                <Text style={styles.textBtn}>Register</Text>
              </TouchableOpacity>
              <View style={styles.btnBottom}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.textBtnBottom}>Already have the account? Login.</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  form: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 30,
    lineHeight: 35,
    marginHorizontal: 16,
    marginBottom: 32,
  },
  input: {
    height: 50,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E8E8E8',
    paddingLeft: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
  },
  btn: {
    borderRadius: 100,
    backgroundColor: '#FF6C00',
    height: 51,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
  },
  btnBottom: {
    marginTop: 16,
  },

  textBtnBottom: {
    textAlign: 'center',
    color: '#1B4371',
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Roboto-Regular',
  },
});

export default RegistrationScreen;
