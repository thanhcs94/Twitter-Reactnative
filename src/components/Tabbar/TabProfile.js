import React, { Component } from 'react';
import {icon, colors, dimens} from '../../config/appConfig'
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
                <Text style = {styles.textBig}>TabProfile</Text>
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
    textBig: {
        fontSize: dimens.text_title,
        textAlign: 'center',
        margin: 10,
        color : colors.primary_text_color
    }
});