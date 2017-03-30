import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Login from './layout/Login';
import {colors} from './config/appConfig'
import {icon} from './config/appConfig'
import {Actions, Scene, Router} from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key="root">
    <Scene 
        key="login" 
        component={Login} 
        title="Login"
        renderBackButton={() => renderBackButton()}
        />
  </Scene>
);

const renderBackButton = () => {
    return (
        <TouchableOpacity
            onPress={() => {}}>
            <View style={{ width:5 , height:5, flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={icon.ic_back}
                    resizeMode={'contain'}/>
                   <Text></Text>
            </View>
        </TouchableOpacity>
    );
};


export default class Index extends Component {

  render() {
    return <Router navigationBarStyle={styles.navBar} 
        titleStyle={styles.navBarTitle} 
        barButtonTextStyle={styles.barButtonTextStyle} 
        barButtonIconStyle={styles.barButtonIconStyle}
        scenes={scenes}
        style = {styles.container}/>
  } 
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.dark_primary_color,
    },
    navBar: {
    backgroundColor:colors.dark_primary_color,
    },
    navBarTitle:{
        color:colors.text_primary_color
    },
    barButtonTextStyle:{
        color:colors.text_primary_color
    },
    barButtonIconStyle:{
        tintColor:colors.dark_primary_color
    }
})