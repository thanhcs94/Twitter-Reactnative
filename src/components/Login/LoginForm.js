import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
    Button,
    AsyncStorage
} from 'react-native';
// import {connect} from 'react-redux'
// import {fetchDataLogin} from '../../actions/loginAction'
import {dimens} from '../../config/appConfig'
import {twitter} from 'react-native-simple-auth';
import {dataKey} from '../../config/Constraint'
const twitter_app ={
    appId: 'Se9Zj1Jaeybn1R4VHk8ZXobOM',
    appSecret: '309PQFS093hTtf5RzfbO5pYmeBvSz3WjyT6kJUi8SMqSRwqRE7',
    callback: 'demotwitter://authorize',
}
class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state ={
        };
    }
    _loginTwitter(){
        twitter(twitter_app).then((info) => {
            console.log("TwitterAcount : "+ JSON.stringify(info.user))
            this._saveDataLogin(1, JSON.stringify(info.user));
        }).catch((error) => {
            alert(JSON.stringify(error.code +" - "+ error.description))
           this._saveDataLogin(0, "");
        });
    }

    async _saveDataLogin(islogin, accountData){
        try {
            //await AsyncStorage.setItem(dataKey.islogin, islogin);
            isin = islogin? '1':'0'
            await AsyncStorage.setItem(dataKey.islogin, isin);
             console.log("Save Account Data : "+islogin)
            await AsyncStorage.setItem(dataKey.accountData, accountData);
             console.log("Save Account Data : "+accountData)
        }catch(error){

        }
    }
    render() {
        return (
            <KeyboardAvoidingView behavior = "padding" style={styles.container}>
                <StatusBar barStyle = "light-content"/>
                {/*<TouchableOpacity style = {styles.buttonContainer} onPress = {()=> this.props.fetchDataLogin(this.state.client_id, this.state.client_secret)} >*/}
                <TouchableOpacity style = {styles.buttonContainer} onPress = {()=> this._loginTwitter()} >
                    <Text style ={styles.loginButton}>Login by Twitter</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}


// function mapStateToProps (state) {
//     return {
//
//     }
// }

// function mapDispatchToProps (dispatch) {
//
//     return {
//         fetchDataLogin: (clientId, clientSecret) => dispatch(fetchDataLogin(clientId, clientSecret))
//     }
// }


const styles = StyleSheet.create({
    container: {
        padding :20,
        marginBottom:50
    },
    input:{
        minWidth:300,
        flexWrap:'wrap',
        height : 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal : 8,
        color:'#fff',
        marginBottom : 10,
        borderRadius:6,

    },
    buttonContainer:{
        backgroundColor: "#3399CC",
        paddingVertical:8,
        marginTop:15,
        marginBottom:20,
        borderRadius:3
    },
    loginButton:{
        color: '#ffffff',
        textAlign:'center',
        fontWeight:'500',
        padding: dimens.space_small

    }
});

export default LoginForm;
//export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
