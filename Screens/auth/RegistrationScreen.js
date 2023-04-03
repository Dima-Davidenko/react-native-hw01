import { useState } from 'react';
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { authSignUp } from '../../redux/auth/authOperations';
import useKeyboard from '../../hooks/useKeyboard';

const initialState = {
  userName: '',
  password: '',
  email: '',
};

const RegistrationScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  const isKeyboardOpen = useKeyboard();
  const { width } = useWindowDimensions();
  const keyboardHide = () => {
    Keyboard.dismiss();
    setState(initialState);
  };

  const onRegistration = () => {
    dispatch(authSignUp(state));
    setState(initialState);
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
                paddingBottom: isKeyboardOpen ? 32 : 113,
                width,
              }}
            >
              <Text style={styles.title}>Registration</Text>
              <TextInput
                value={state.userName}
                onChangeText={value => setState(prevState => ({ ...prevState, userName: value }))}
                placeholder="Name"
                style={styles.input}
              />
              <TextInput
                value={state.email}
                onChangeText={value => setState(prevState => ({ ...prevState, email: value }))}
                placeholder="Email"
                style={styles.input}
              />
              <TextInput
                value={state.password}
                onChangeText={value => setState(prevState => ({ ...prevState, password: value }))}
                placeholder="Password"
                secureTextEntry={true}
                style={styles.input}
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
