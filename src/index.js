import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Login from './components/Login';
import TabNewFeeds from './components/Tabbar/TabNewFeeds';
import TabNotifications from './components/Tabbar/TabNotifications';
import TabMessages from './components/Tabbar/TabMessages';
import TabProfile from './components/Tabbar/TabProfile';
import {colors} from './config/appConfig'
import {icon} from './config/appConfig'

import Drawer from 'react-native-drawer'

import {Actions,ActionConst, Scene, Router, NavigationDrawer} from 'react-native-router-flux';


class TabIcon extends React.Component {
    
    _getIcon(){
        switch(this.props.title){
            case "Home":
                   return this.props.selected? icon.tab_home_selected: icon.tab_home_unselect
            case "Notifications":
                   return this.props.selected? icon.tab_noti_selected: icon.tab_noti_unselect
            case "Inbox":
                   return this.props.selected? icon.tab_message_selected: icon.tab_message_unselect
             case "Profile":
                   return this.props.selected? icon.tab_profile_selected: icon.tab_profile_unselect
        }
    }
    render(){
        return (
            <View style ={styles.tabView}>
                <Image style={styles.tabIcon}
                source = {this._getIcon()}>
                </Image>
                <Text style={{color: this.props.selected ? colors.light_primary_color :colors.secondary_text_color }}>{this.props.title}</Text>
            </View>
        );
    }
}

const scenes = Actions.create(
    <Scene key="root">
       <Scene key='tab' tabs={true} hideNavBar type={ActionConst.REPLACE}>
            <Scene key='tabFeeds' title='Home' component={TabNewFeeds} icon={TabIcon}></Scene>
            <Scene key='tabNotifications' title='Notifications' component={TabNotifications} icon={TabIcon}></Scene>
            <Scene key='tabMessages' title='Inbox' component={TabMessages} icon={TabIcon}></Scene>
            <Scene key='tabProfile' title='Profile' component={TabProfile} icon={TabIcon}></Scene>
     </Scene>
    <Scene key='login' component={Login} hideNavBar type={ActionConst.REPLACE}></Scene>  
  </Scene>
);

export default class Index extends Component {


closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  
  render() {
    return <Router hideNavBar={true} 
        scenes={scenes}
        style = {styles.container}/>
  } 
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.dark_primary_color,
    },
    tabView:{
        justifyContent:'center', alignItems:'center', marginBottom:10
    },
    tabIcon:{
        width:20, height:20, marginBottom:5, marginTop:5
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

/**
navigationBarStyle={styles.navBar} 
titleStyle={styles.navBarTitle} 
barButtonTextStyle={styles.barButtonTextStyle} 
barButtonIconStyle={styles.barButtonIconStyle}
 */