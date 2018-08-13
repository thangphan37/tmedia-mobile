import React, { PureComponent } from 'react';
import { View, Text, Image, TextInput, TouchableWithoutFeedback, ToastAndroid } from 'react-native';
import ScaledSheet from '../../libs/reactSizeMatter/ScaledSheet';

class LoginScreen extends PureComponent {
  state = {
    email: null,
    password: null,
    isShowInputPassword: false
  };

  messageEmailError: '';

  static get options() {
    return {
      topBar: {
        drawBehind: true,
        visible: false,
        animate: false
      }
    };
  }

  _changeEmail(email) {
    const getFormatEmail = this._validateEmail(email);

    this.setState({ email });

    if(!email || !getFormatEmail) {
      this.setState({isShowInputPassword: false});
    }

  }

  _changePassword(password) {
    this.setState({ password });
  }

  _validateEmail(email) {
    const reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    return reg.test(email);
  }

  _checkEmail() {
    const { email } = this.state;
    const getFormatEmail = this._validateEmail(email);

    if(!email || !getFormatEmail) {
      !email ? this.messageEmailError = 'Email không được để trống' : this.messageEmailError = 'Email sai định dạng';

      ToastAndroid.showWithGravity(
        this.messageEmailError,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      this.setState({isShowInputPassword: false})
    } else {
      this.setState({isShowInputPassword: true})
    }
  }

  render() {
    const { email, password, isShowInputPassword } = this.state;

    return (
      <View style={styles.screen}>
        <Image source={require('../../../assets/backgroundLogin/backgroundLogin.png')}
               style={styles.imgBackgroundLogin}/>

        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/logo/logo.png')} style={styles.imgLogo}/>
        </View>

        <View style={styles.inputEmailContainer}>
          <Image source={require('../../../assets/email/email.png')} style={styles.imgEmail}/>
          <TextInput style={styles.inputLogin} value={email} onChangeText={(e) => this._changeEmail(e)}/>
          <TouchableWithoutFeedback onPress={() => this._checkEmail()}>
            <Image source={require('../../../assets/arrowRightRound/arrowRightRound.png')}
                   style={styles.imgArrowRight}/>
          </TouchableWithoutFeedback>
        </View>

        {isShowInputPassword ? <View style={styles.inputPasswordContainer}>
          <Image source={require('../../../assets/padlock/padlock.png')} style={styles.imgPadlock}/>
          <TextInput style={styles.inputLogin}
                     value={password}
                     secureTextEntry={true}
                     onChangeText={(p) => this._changePassword(p)}/>
          <TouchableWithoutFeedback onPress={() => this._checkEmail()}>
            <Image source={require('../../../assets/arrowRightRound/arrowRightRound.png')}
                   style={styles.imgArrowRight}/>
          </TouchableWithoutFeedback>
        </View>: null}


        <View style={styles.forgotContainer}>
          <Text style={styles.textForgotPassword}>Forgot password</Text>
          <View style={styles.orContanier}>
            <View style={styles.divider}></View>
            <View>
              <Text style={styles.textOr}>OR</Text>
            </View>
            <View style={styles.divider}></View>
          </View>
        </View>

        <View style={styles.facebookContainer}>
          <Image source={require('../../../assets/facebook/facebook.png')} style={styles.imgFacebook}/>
          <Text style={styles.textFacebook}>Facebook</Text>
        </View>

        <View style={styles.googleContainer}>
          <Image source={require('../../../assets/google/google.png')} style={styles.imgGoogle}/>
          <Text style={styles.textGoogle}>Google</Text>
        </View>

      </View>
    )
  }
}

export default LoginScreen;

const styles = ScaledSheet.create({
  screen: {
    flexDirection: 'column',
    flex: 1
  },
  imgBackgroundLogin: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 0.5,
    alignItems: 'center',
    marginTop: '70@s'
  },
  imgLogo: {
    width: '100@s',
    height: '116@s',
  },
  inputEmailContainer: {
    flexDirection: 'row',
    marginLeft: '40@s',
    marginRight: '40@s',
    borderColor: '#FFF',
    borderWidth: '1@s',
    alignItems: 'center',
    borderRadius: '3@s',
    height: '40@s',
    marginTop: '80@s'
  },
  inputPasswordContainer: {
    flexDirection: 'row',
    marginLeft: '40@s',
    marginRight: '40@s',
    borderColor: '#FFF',
    borderTopWidth: 0,
    borderWidth: '1@s',
    alignItems: 'center',
    borderRadius: '3@s',
    height: '40@s',
  },
  inputLogin: {
    flex: 1,
    color: '#FFF'
  },
  imgEmail: {
    width: '18@s',
    height: '12@s',
    marginLeft: '18@s',
    marginRight: '18@s',
  },
  imgPadlock: {
    width: '11@s',
    height: '16@s',
    marginLeft: '18@s',
    marginRight: '18@s',
  },
  imgArrowRight: {
    width: '20@s',
    height: '20@s',
    marginRight: '8@s'
  },
  forgotContainer: {
    alignItems: 'center',
    marginTop: '70@s'
  },
  orContanier: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '25@s'
  },
  textForgotPassword: {
    fontSize: '13@s',
    color: '#FFF',
  },
  divider: {
    width: '84@s',
    height: '2@s',
    backgroundColor: '#858686'
  },
  textOr: {
    fontSize: '15@s',
    color: '#FFF',
    marginLeft: '15@s',
    marginRight: '15@s',
  },
  facebookContainer: {
    marginTop: '17@s',
    flexDirection: 'row',
    backgroundColor: '#3C5895',
    marginLeft: '40@s',
    marginRight: '40@s',
    alignItems: 'center',
    borderRadius: '3@s',
    height: '40@s'
  },
  googleContainer: {
    marginTop: '15@s',
    flexDirection: 'row',
    backgroundColor: '#D34939',
    marginLeft: '40@s',
    marginRight: '40@s',
    alignItems: 'center',
    borderRadius: '3@s',
    height: '40@s'
  },
  imgFacebook: {
    marginLeft: '22@s',
    width: '10@s',
    height: '22@s',
  },
  textFacebook: {
    flex: 0.9,
    textAlign: 'center',
    fontSize: '12@s',
    color: '#FFF'
  },
  textGoogle: {
    flex: 0.8,
    textAlign: 'center',
    fontSize: '12@s',
    color: '#FFF'
  },
  imgGoogle: {
    marginLeft: '22@s',
    width: '25@s',
    height: '23@s',
  }
});