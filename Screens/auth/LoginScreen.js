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
  password: '',
  email: '',
};

const LoginScreen = ({ navigation }) => {
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
  const onLogin = () => {
    console.log('Credentials', `${state.email} + ${state.password}`);
    dispatch(logIn());
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
                paddingBottom: isShowKeyboard ? 32 : 179,
                width,
              }}
            >
              <Text style={styles.title}>Login</Text>
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
              <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={onLogin}>
                <Text style={styles.textBtn}>Login</Text>
              </TouchableOpacity>
              <View style={styles.btnBottom}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('Registration')}
                >
                  <Text style={styles.textBtnBottom}>Don't have an account? Register.</Text>
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
    paddingTop: 32,
  },
  title: {
    fontWeight: '500',
    fontFamily: 'Roboto-Bold',
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

export default LoginScreen;
