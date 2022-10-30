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
import {Header, Text, Icon} from 'react-native-elements';

const deviceheight = Dimensions.get('window').height;
const devicewidth = Dimensions.get('window').width;

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      empid: '',
      loading: false,
      showalert: false,
      message: '',
      hidepassword: true,
      passwordicon: 'visibility',
    };
  }
  Passwordvisiblity = async () => {
    if (this.state.hidepassword === true) {
      this.setState({hidepassword: false, passwordicon: 'visibility-off'});
    } else if (this.state.hidepassword === false) {
      this.setState({hidepassword: true, passwordicon: 'visibility'});
    }
  };
  render() {
    //const {navigate, goBack} = this.props.navigation;
    //let a = String.
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
              <Text>{'\n\n'}</Text>
              <Icon
                name="account-circle"
                color="#b0b0b0"
                size={devicewidth * 0.5}
              />
              <Text style={styles.username_style}>
                {'\n\n\n\n\n\n'}Name{'\n\n'}
              </Text>
              <Text style={styles.username_style}>E mail{'\n\n'}</Text>
              <Text style={styles.username_style}>Employee Id{'\n\n'}</Text>
              <Text style={styles.username_style}>Role{'\n\n'}</Text>
              <Text style={styles.username_style}>Date of Birth{'\n\n'}</Text>
              <Text style={styles.username_style}>
                Registration Date{'\n\n'}
              </Text>
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
    minHeight: deviceheight,
    width: devicewidth,
  },
  username_style: {
    textAlign: 'left',
    fontSize: deviceheight * 0.02,
    fontFamily: 'sans-serif-condensed',
    color: '#033a42',
    marginLeft: devicewidth * 0.03,
  },
});
