/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import {Icon, Header} from 'react-native-elements';
const deviceheight = Dimensions.get('window').height;
const devicewidth = Dimensions.get('window').width;

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Header
            statusBarProps={{
              barStyle: 'dark-content',
              backgroundColor: 'transparent',
            }}
            containerStyle={{
              //color for the outside of the curve container.
              justifyContent: 'space-around',
              marginTop: deviceheight * 0.02,
              width: devicewidth,
              height: deviceheight * 0.095,
              backgroundColor: 'transparent',
              borderBottomColor: 'transparent',
              paddingBottom: deviceheight * 0.03,
            }}
          />
          <ScrollView>
            <Text style={styles.textstyle}>Quadrant Measurements</Text>
            <Icon name="point-of-sale" color="#033a42" />
            <View style={styles.flexhori}>
              <View style={styles.boxstyle}>
                <Text style={styles.textstyle}>Machine 1{'\n'}</Text>
                <Icon name="settings" color="#29cba4" />
              </View>
              <View style={styles.boxstyle}>
                <Text style={styles.textstyle}>Machine 2{'\n'}</Text>
                <Icon name="settings-applications" color="#29cba4" />
              </View>
            </View>
            <Text>{'\n\n'}</Text>
            <View style={styles.flexhori}>
              <View style={styles.boxstyle}>
                <Text style={styles.textstyle}>Machine 3{'\n'}</Text>
                <Icon name="settings-input-hdmi" color="#29cba4" />
              </View>
              <View style={styles.boxstyle}>
                <Text style={styles.textstyle}>Machine 4{'\n'}</Text>
                <Icon name="settings-input-svideo" color="#29cba4" />
              </View>
            </View>
            <Text>{'\n\n'}</Text>
            <View style={styles.flexhori}>
              <View style={styles.boxstyle}>
                <Text style={styles.textstyle}>Machine 5{'\n'}</Text>
                <Icon name="settings-remote" color="#29cba4" />
              </View>
              <View style={styles.boxstyle}>
                <Text style={styles.textstyle}>Machine 6{'\n'}</Text>
                <Icon name="settings-input-composite" color="#29cba4" />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  body: {
    backgroundColor: 'white',
  },
  flexhori: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    width: devicewidth,
    backgroundColor: 'transparent',
    justifyContent: 'space-evenly',
    marginTop: deviceheight * 0.02,
  },
  boxstyle: {
    width: devicewidth * 0.3,
    height: deviceheight * 0.15,
    borderColor: '#29cba4',
    borderWidth: 1,
    marginTop: deviceheight * 0.05,
    paddingTop: deviceheight * 0.03,
  },
  textstyle: {
    textAlign: 'center',
    color: '#033a42',
    fontFamily: 'sans-serif-condensed',
    fontSize: 20,
  },
});
export default HomeScreen;
