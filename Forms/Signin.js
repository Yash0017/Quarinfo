/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';
import {Header, Text, Icon, Input, Button} from 'react-native-elements';

const deviceheight = Dimensions.get('window').height;
const devicewidth = Dimensions.get('window').width;

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      showalert: false,
      message: '',
      hidepassword: true,
      passwordicon: 'visibility',
    };
  }
  handelemail = (text) => {
    this.setState({email: text});
  };
  handelpassword = (text) => {
    this.setState({password: text});
  };
  Passwordvisiblity = async () => {
    if (this.state.hidepassword === true) {
      this.setState({hidepassword: false, passwordicon: 'visibility-off'});
    } else if (this.state.hidepassword === false) {
      this.setState({hidepassword: true, passwordicon: 'visibility'});
    }
  };
  render() {
    const {navigate, goBack} = this.props.navigation;
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Header
            statusBarProps={{
              barStyle: 'dark-content',
              backgroundColor: 'white',
            }}
            leftComponent={<Icon name="arrow-back" color="#29cb7a" />}
            containerStyle={{
              justifyContent: 'space-around',
              width: devicewidth,
              backgroundColor: 'white',
              borderBottomColor: 'white',
            }}
          />
          <ScrollView>
            <View style={styles.view_container}>
              <View style={styles.flex_upper}>
                <Icon
                  name="account-circle"
                  color="#b0b0b0"
                  size={devicewidth * 0.35}
                />
                <Text style={styles.username_style}>{'\n'}Signin</Text>
                <Button
                  title="Register"
                  buttonStyle={{
                    height: deviceheight * 0.09,
                    width: devicewidth * 0.35,
                    backgroundColor: '#29cb7a',
                    marginTop: deviceheight * 0.02,
                    borderRadius: deviceheight * 0.06,
                    marginRight: devicewidth,
                  }}
                  titleStyle={{
                    textAlign: 'right',
                    fontSize: deviceheight * 0.02,
                    fontFamily: 'sans-serif-condensed',
                    marginLeft: 60,
                  }}
                  onPress={() => {
                    navigate('Register');
                  }}
                />
                <Text>{'\n'}</Text>
                <Input
                  placeholder="E mail"
                  leftIcon={
                    <Icon
                      name="envelope-open"
                      type="font-awesome"
                      color="#29cb7a"
                    />
                  }
                  containerStyle={{
                    borderColor: '#29cb7a',
                    height: deviceheight * 0.07,
                    width: devicewidth * 0.85,
                    borderBottomWidth: 1,
                  }}
                  inputContainerStyle={{borderBottomColor: 'transparent'}}
                  value={this.state.email}
                  onChangeText={this.handelemail}
                />
                <Text>{'\n'}</Text>
                <Input
                  placeholder="Password"
                  leftIcon={<Icon name="lock" color="#29cb7a" />}
                  rightIcon={
                    <Icon
                      name={this.state.passwordicon}
                      color="#29cb7a"
                      onPress={() => this.Passwordvisiblity()}
                    />
                  }
                  containerStyle={{
                    borderColor: '#29cb7a',
                    height: deviceheight * 0.07,
                    width: devicewidth * 0.85,
                    borderBottomWidth: 1,
                  }}
                  inputContainerStyle={{borderBottomColor: 'transparent'}}
                  secureTextEntry={this.state.hidepassword}
                  value={this.state.password}
                  onChangeText={this.handelpassword}
                />
                <Text>{'\n'}</Text>
                <Button
                  title="forget password"
                  type="clear"
                  buttonStyle={{
                    height: deviceheight * 0.03,
                    width: deviceheight * 0.9,
                    borderWidth: 0,
                  }}
                  titleStyle={{
                    fontSize: deviceheight * 0.017,
                    textAlign: 'right',
                    color: '#033a42',
                    left: devicewidth * 0.3,
                  }}
                />
                <Text>{'\n\n'}</Text>
                <Button
                  title="Log in"
                  buttonStyle={{
                    height: deviceheight * 0.07,
                    width: devicewidth * 0.7,
                    backgroundColor: '#29cb7a',
                  }}
                  titleStyle={{
                    textAlign: 'center',
                    fontSize: deviceheight * 0.03,
                    fontFamily: 'sans-serif-condensed',
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view_container: {
    backgroundColor: 'white',
    minHeight: deviceheight * 2,
    width: devicewidth,
  },
  flex_upper: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  username_style: {
    textAlign: 'center',
    fontSize: deviceheight * 0.05,
    fontFamily: 'sans-serif-condensed',
    color: '#033a42',
  },
});
