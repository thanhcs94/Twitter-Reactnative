import React, { Component } from 'react';
import LoginForm from './LoginForm';
import {icon} from '../../config/appConfig'
import {colors} from '../../config/appConfig'
import {dataKey} from '../../config/Constraint'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    AsyncStorage, 
    StatusBar
} from 'react-native';

export default class Login extends Component {


    componentDidMount() {
        if(AsyncStorage.getItem(dataKey.islogin)==true){
            console.log("Login Login Roi")
            AsyncStorage.getItem(dataKey.accountData).then((value) => {
                console.log(JSON.stringify(value))
            })
                .then(res => {
                    //do something else
                });
        }else{
            console.log("Login Not yet Login")
        }
    }
    render() {
        return (
            <View style={styles.container}>
                  <StatusBar barStyle = "light-content"/>
                <View style = {styles.logoConten}>
                    <Image
                        style = {styles.logo}
                        source={icon.logo} />
                    <Text style = {styles.titleAppBig}>Welcome to TweetStar
                    </Text>

                    <Text style = {styles.titleApp}>Get real-time updates about what matters to you.
                    </Text>

                </View>
                <LoginForm style ={{flex:0}}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:colors.dark_primary_color,
    },
    logoConten:{
        flexGrow :1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleAppBig: {
        width : 300,
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color :'#ffffff',
        fontWeight:'700'
    },
    titleApp: {
        width : 300,
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        color :'#ffffff'
    },
    logo:{
        width:150,
        height:150,
        marginTop:70
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});