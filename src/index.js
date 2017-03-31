import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  DrawerLayoutAndroid
} from 'react-native';
import Login from './components/Login';
import TabNewFeeds from './components/Tabbar/TabNewFeeds';
import TabNotifications from './components/Tabbar/TabNotifications';
import TabMessages from './components/Tabbar/TabMessages';
import ControlPanel from './components/Drawer/ControlPanel';
import TabProfile from './components/Tabbar/TabProfile';
import {colors} from './config/appConfig'
import {icon} from './config/appConfig'

import Drawer from 'react-native-drawer'
import {Actions,ActionConst, Scene, Router,Route, NavigationDrawer} from 'react-native-router-flux';



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

 state={
    drawerOpen: false,
    drawerDisabled: false,
  };

 closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };
  
  render() {
    return <Drawer
        ref={(ref) => this._drawer = ref}
        type="static"
        acceptDoubleTap
        styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
        content={<ControlPanel closeDrawer={this.closeDrawer} />}
         onOpen={() => {
          console.log('onopen')
          this.setState({drawerOpen: true})
        }}
        onClose={() => {
          console.log('onclose')
          this.setState({drawerOpen: false})
        }}
        captureGestures={false}
        tweenDuration={100}
        panThreshold={0.1}
        disabled={this.state.drawerDisabled}
        openDrawerOffset={(viewport) => {
          return 100
        }}
        panOpenMask={0.95}
        negotiatePan>
         <Router hideNavBar={true} 
        scenes={scenes}
        style = {styles.container}/>

      </Drawer>

       //this.openControlPanel();
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