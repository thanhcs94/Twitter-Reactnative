import React, { Component } from 'react';
import {icon} from '../../config/appConfig'
import {colors} from '../../config/appConfig'
import {dataKey} from '../../config/Constraint'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    AsyncStorage
} from 'react-native';

export default class TabProfile extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>TabProfile</Text>
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