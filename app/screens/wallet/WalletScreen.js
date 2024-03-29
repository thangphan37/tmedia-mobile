import React, { PureComponent } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Clipboard, Slider } from 'react-native';
import ScaledSheet from '../../libs/reactSizeMatter/ScaledSheet';
import { scale } from "../../libs/reactSizeMatter/scalingUtils";
import { Card } from 'react-native-elements';
import Modal from 'react-native-modal';
import { map } from 'lodash';
import MainWalletComponent from "./MainWalletComponent";
import { goWalletHistoryScreen } from '../navigation';

export default class OtpScreen extends PureComponent {
  static get options() {
    return {
      topBar: {
        drawBehind: true,
        visible: false,
        animate: false
      }
    };
  }

  listCoin = ['BTC', 'ETH', 'ABC'];

  constructor(props) {
    super(props);
    this.state = {
      showSendCoin: false,
      showNewWallet: false,
      showMain2: false,
      showListCoin: false,
      value: 10,
      selectedCoinType: this.listCoin[0],
      showSceretCode: false
    };

  }

  _renderSenCoin() {
    return (
      <MainWalletComponent name="Main"/>
    )
  }

  _renderMain2() {
    return (
      <View>
        {
          this.state.showMain2
            ? (
              <View style={[styles.bigRow, { paddingLeft: 0 }]}>
                <View style={styles.row2}>
                  <Text style={styles.nameType}>Main 2</Text>
                  <Text style={styles.numberCoin}>0 BTC</Text>
                  <TouchableOpacity style={{ flex: 0.2, flexDirection: 'row-reverse' }}
                                    onPress={() => this.setState({ showMain2: false })}>
                    <Image style={styles.arrowRight}
                           source={require('../../../assets/arrow/arrowUp/Shape.png')}/>
                  </TouchableOpacity>
                </View>

                <View style={styles.privateKeyContainer}>
                  <Text style={styles.textPrivateKey}>Private key</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={styles.privateKey}>a7cd5fd7dcb3ed17183f786effaa21413234123b</Text>
                    <TouchableOpacity onPress={() => Clipboard.setString('a7cd5fd7dcb3ed17183f786effaa21413234123b')}>
                      <Image style={styles.iconCopy}
                             source={require('../../../assets/iconCopy/Shape.png')} />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.privateKeyContainer}>
                  <Text style={styles.textPrivateKey}>Address</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={[styles.privateKey, {paddingRight: 0}]}>1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX</Text>
                    <TouchableOpacity onPress={() => Clipboard.setString('1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX')}>
                      <Image style={styles.iconCopy}
                             source={require('../../../assets/iconCopy/Shape.png')} />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.qrCodeContainer}>
                  <Image style={styles.qrCode}
                         source={require('../../../assets/qrCode/frame.png')}/>
                </View>

                <View style={[styles.groupMpdalPhoneText, { justifyContent: 'center' }]}>
                  <TouchableOpacity style={{ marginLeft: scale(15) }}>
                    <Text style={styles.buttonOK}>OK</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
            : (
              <View style={styles.row1}>
                <Text style={styles.nameType}>Main 2</Text>
                <Text style={styles.numberCoin}>0 BTC</Text>
                <TouchableOpacity style={{ flex: 0.2, flexDirection: 'row-reverse' }}
                                  onPress={() => this.setState({ showMain2: true })}>
                  <Image style={styles.arrowDown}
                         source={require('../../../assets/arrow/arrowDown/Shape.png')}
                  />
                </TouchableOpacity>
              </View>
            )
        }
      </View>
    )
  }

  _renderAddNewWallet() {
    return (
      <View>
        {
          this.state.showNewWallet
            ? (
              <View style={[styles.bigRow, { paddingLeft: 0 }]}>
                <View style={styles.row2}>
                  <Text style={styles.nameType}>New wallet</Text>
                  <TouchableOpacity style={{ flex: 0.2, flexDirection: 'row-reverse' }}
                                    onPress={() => this.setState({ showNewWallet: false })}>
                    <Image style={styles.arrowRight}
                           source={require('../../../assets/arrow/arrowUp/Shape.png')}
                    />
                  </TouchableOpacity>
                </View>

                <View style={[styles.rowInput, { marginLeft: scale(20) }]}>
                  <Text style={[styles.secretCode, { flex: 1 }]}>Secret code</Text>
                  <View style={{ flex: 2.1 }}>
                    <TextInput style={styles.phoneInput}
                               underlineColorAndroid='transparent'
                               secureTextEntry={!this.state.showSceretCode}
                               keyboardType='numeric'
                      // value={password}
                      // onChangeText={(p) => this._changePassword(p)}
                    />
                  </View>
                  <TouchableOpacity
                    onPressIn={() => this.setState({ showSceretCode: true })}
                    onPressOut={() => this.setState({ showSceretCode: false })}>
                    <Image style={styles.eye}
                           source={require('../../../assets/eye/view.png')}/>

                  </TouchableOpacity>
                </View>

                <View style={{ width: scale(275) }}>
                  <Text style={styles.notice}>Remember: Back up this secret code.</Text>
                </View>

                <View style={[styles.rowInput, { marginLeft: scale(20) }]}>
                  <Text style={[styles.secretCode, { flex: 1 }]}>Name</Text>
                  <View style={{ flex: 3 }}>
                    <TextInput style={styles.phoneInput}
                               underlineColorAndroid='transparent'
                      // value={password}
                      // onChangeText={(p) => this._changePassword(p)}
                    />
                  </View>
                </View>

                <View style={[styles.groupMpdalPhoneText, { justifyContent: 'center' }]}>
                  <TouchableOpacity style={{ marginLeft: scale(15) }}>
                    <Text style={styles.buttonOK}>OK</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
            : (
              <View style={styles.row1}>
                <Text style={styles.nameType}>New wallet</Text>
                <TouchableOpacity style={{ flex: 0.2, flexDirection: 'row-reverse' }}
                                  onPress={() => this.setState({ showNewWallet: true })}>
                  <Image style={styles.arrowDown}
                         source={require('../../../assets/arrow/arrowDown/Shape.png')}
                  />
                </TouchableOpacity>
              </View>
            )
        }
      </View>
    )
  }

  _renderListCoin() {
    return (
      <Modal
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        isVisible={this.state.showListCoin}
        avoidKeyboard={true}
        useNativeDriver={true}
        backdropColor='transparent'
        onBackButtonPress={() => this.hideModalListCoin()}
        onBackdropPress={() => this.hideModalListCoin()}
        style={styles.modalDropdown}>
        <View style={styles.triangleContainer}>
          <View style={styles.triangle} />
        </View>
        <Card containerStyle={styles.cardListCoin}>
          {
            this._generateOptionList()
          }

        </Card>
      </Modal>
    )
  }

  hideModalListCoin() {
    this.setState({ showListCoin: false })
  }

  _onCoinPickerSelect(index) {
    let selectedCoinType = this.listCoin[index];
    this.setState({ selectedCoinType, showListCoin: false });
  }

  _renderRowInModal(index, text, iconCoin) {
    return (
      <View key={index}
            style={this.listCoin[index] === this.state.selectedCoinType ? { backgroundColor: '#E0E0E0' } : {backgroundColor: '#ffffff'}}>
        <TouchableOpacity style={styles.rowModalDropdown}
                          onPress={() => this._onCoinPickerSelect(index)}>
          {iconCoin}
          <Text style={styles.nameCoinInModal}>{text}</Text>
        </TouchableOpacity>
        {
          (index === this.listCoin.length - 1) ? (<View/>) : (<View style={styles.lineInModal} />)
        }
      </View>

    )
  }

  _generateOptionList() {
    return map(this.listCoin, (e, index) => {
      let iconCoin = '';
      switch (e) {
        case 'BTC':
          iconCoin = <Image style={styles.iconCoin} source={require('../../../assets/coinIcon/btc/bit.png')}/>;
          return this._renderRowInModal(index, 'Bitcoin - BTC', iconCoin);
          break;
        case 'ETH':
          iconCoin = <Image style={styles.iconCoin} source={require('../../../assets/coinIcon/eth/eth.png')}/>;
          return this._renderRowInModal(index, 'Ethereum - ETH', iconCoin);
          break;
        case 'ABC':
          iconCoin = <Image style={styles.iconCoin} source={require('../../../assets/coinIcon/abc/abc.png')}/>;
          return this._renderRowInModal(index, 'Abc coin - ABC', iconCoin);
          break;
        default:
          return null
      }
    })
  }

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.containerUp}>
          <View style={styles.colUpContainer}>
            <Text style={styles.textTotalBalance}>TOTAL BALANCE</Text>
            <Text style={styles.textUnderTotal}>1.25 BTC</Text>
            <Text>7,500 USD</Text>
          </View>
          <TouchableOpacity style={[styles.colUpContainer, { flex: 1 }]}
          onPress={() => goWalletHistoryScreen()}>
            <Text style={styles.textHistory}>HISTORY</Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.buttonSelectCoin}
                          onPress={() => this.setState({ showListCoin: true })}>
          <Text style={styles.coinName}>{this.state.selectedCoinType}</Text>
          <Image style={styles.arrowInButton}
                 source={require('../../../assets/arrow/arrowDown/white.png')}
          />
        </TouchableOpacity>
        <ScrollView>
          <View style={styles.containerDown}>
            {this._renderSenCoin()}
            {this._renderMain2()}
            {this._renderAddNewWallet()}
            {this._renderListCoin()}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = ScaledSheet.create({
  screen: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  containerUp: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '75@s',
    marginBottom: '35@s'
  },
  containerDown: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: '30@s',
    paddingRight: '30@s'
  },
  colUpContainer: {
    flex: 3.5,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '17@s',
    paddingRight: '10@s'
  },
  textTotalBalance: {
    fontFamily: 'Futura Book font',
    color: '#576574',
    fontSize: '14@s'
  },
  textUnderTotal: {
    fontSize: '13@s',
    fontFamily: 'Futura Book font',
    color: '#576574'
  },
  textHistory: {
    fontSize: '14@s',
    textAlign: 'right',
    fontFamily: 'Futura Heavy font',
    color: '#576574'
  },
  buttonSelectCoin: {
    position: 'absolute',
    top: '60@s',
    width: '100@s',
    height: '30@s',
    borderRadius: '15@s',
    backgroundColor: '#576574',
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinName: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Futura Book font',
    fontSize: '13@s',
    color: '#ffffff',
  },
  arrowInButton: {
    position: 'absolute',
    width: '9@s',
    height: '5@s',
    right: '12@s'
  },
  row1: {
    marginBottom: '10@s',
    height: '56@s',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderRadius: '28@s',
    alignItems: 'center',
    paddingLeft: '20@s',
    paddingRight: '28@s',
    justifyContent: 'space-between',
    width: '315@s'
  },
  nameType: {
    fontFamily: 'Futura Book font',
    fontSize: '13@s',
    color: '#576574',
    flex: 1,
  },
  numberCoin: {
    position: 'absolute',
    right: '85@s',
    fontSize: '13@s',
    fontFamily: 'Futura Book font',
    color: '#576574'
  },
  buttonSend: {
    fontFamily: 'Futura Book font',
    fontSize: '13@s',
    lineHeight: '15@s',
    textAlign: 'right',
    color: '#10AC84'
  },
  bigRow: {
    marginBottom: '10@s',
    backgroundColor: '#ffffff',
    borderRadius: '28@s',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: '20@s',
    width: '315@s'
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '20@s'
  },
  rowInput: {
    flexDirection: 'row',
    marginRight: '20@s',
    height: '40@s', borderBottomWidth: '1@s', borderBottomColor: '#E0E0E0', alignItems: 'center'
  },
  secretCode: {
    fontFamily: 'Futura Book font',
    fontSize: '12@s',
    color: '#576574'
  },
  phoneInput: {
    fontFamily: 'Futura Book font',
    fontSize: '13@s',
    color: '#576574',
    height: '40@s',
    paddingBottom: '9@s',
    paddingLeft: '10@s',
    paddingRight: '10@s',
    textAlign: 'right'
  },
  qrIcon: {
    width: 21,
    height: 20
  },
  sliderContainer: {
    flexDirection: 'column',
    height: '25@s',
    alignItems: 'center',
    marginLeft: '2@s'
  },
  slider: {
    marginTop: '10@s',
    borderRadius: '2@s',
    width: '305@s'
  },
  buttonCircle: {
    width: '20@s',
    height: '20@s',
    borderRadius: '10@s',
    backgroundColor: '#576574',
    position: 'absolute',
    left: '166@s',
  },
  groupMpdalPhoneText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '30@s',
    height: '40@s'
  },
  buttonCancel: {
    fontFamily: 'Futura Book font',
    fontSize: '13@s',
    color: '#576574'
  },
  buttonOK: {
    fontFamily: 'Futura Book font',
    fontSize: '13@s',
    color: '#10AC84',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '20@s',
    paddingRight: '28@s',
    justifyContent: 'space-between',
    height: '55@s',
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: '1@s'
  },
  arrowDown: {
    width: '10@s',
    height: '6@s'
  },
  notice: {
    color: '#F86C6B',
    fontFamily: 'Futura Book font',
    fontSize: '11@s',
    textAlign: 'left'
  },
  privateKeyContainer: {
    marginTop: '8@s',
    width: '275@s'
  },
  textPrivateKey: {
    color: '#576574',
    fontWeight: 'bold',
    fontFamily: 'Futura Book font',
    fontSize: '13@s'
  },
  privateKey: {
    fontFamily: 'Futura Light font',
    fontSize: '14@s',
    color: '#576574',
    paddingRight: '20@s',
    width: '240@s',
    textAlign: 'center',
    letterSpacing: '1@s'
  },
  textCopy: {
    color: '#2E86DE',
    fontFamily: 'Futura Book font',
    fontSize: '13@s'
  },
  qrCodeContainer: {
    marginTop: '20@s',
    marginBottom: '5@s',
    flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
  },
  qrCode: {
    width: '155@s',
    height: '155@s'
  },
  modalDropdown: {
    justifyContent: 'flex-start',
    paddingTop: '37@s'
  },
  iconCoin: {
    width: '20@s',
    height: '20@s'
  },
  rowModalDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '44@s',
    paddingLeft: '16@s',
    paddingRight: '16@s',
  },
  cardListCoin: {
    padding: 0,
    margin: '0@s',
    backgroundColor: 'transparent'
  },
  lineInModal: {
    marginLeft: '16@s',
    marginRight: '16@s',
    height: '1@s',
    backgroundColor: '#E0E0E0',
  },
  nameCoinInModal: {
    marginLeft: '10@s',
    color: '#576574',
    fontFamily: 'Futura Book font',
    fontSize: '14@s',
  },
  triangle:{
    width: 0,
    height: 0,
    borderLeftWidth: '10@s',
    borderLeftColor: 'transparent',
    borderRightWidth: '10@s',
    borderRightColor: 'transparent',
    borderBottomWidth: '10@s',
    borderBottomColor: '#ffffff',
  },
  triangleContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  eye: {
    width: '18@s', height: '11@s'
  },
  iconCopy: {
    width: '17@s', height: '20@s'
  }

});
